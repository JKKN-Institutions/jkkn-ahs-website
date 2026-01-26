# Integration Patterns & Best Practices

Common patterns, best practices, and real-world examples for integrating MyJKKN API into child applications.

---

## Table of Contents

1. [Data Fetching Patterns](#data-fetching-patterns)
2. [Caching Strategies](#caching-strategies)
3. [UI Component Patterns](#ui-component-patterns)
4. [Performance Optimization](#performance-optimization)
5. [Error Handling](#error-handling)
6. [Real-World Examples](#real-world-examples)

---

## Data Fetching Patterns

### Pattern 1: React Query Integration

**Best for:** React/Next.js applications with complex data requirements

```typescript
// hooks/useStudents.ts
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

interface StudentFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  department_id?: string;
}

export function useStudents(filters: StudentFilters = {}) {
  return useQuery({
    queryKey: ['students', filters],
    queryFn: () => apiClient.students.list(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

// Prefetch for better UX
export function usePrefetchStudents() {
  const queryClient = useQueryClient();

  return (filters: StudentFilters) => {
    queryClient.prefetchQuery({
      queryKey: ['students', filters],
      queryFn: () => apiClient.students.list(filters),
    });
  };
}

// Usage in component
function StudentsList() {
  const [filters, setFilters] = useState({ page: 1, limit: 10 });
  const { data, isLoading, error, refetch } = useStudents(filters);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;

  return (
    <div>
      {data?.data.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
      <Pagination
        currentPage={filters.page}
        totalPages={data?.metadata.totalPages}
        onChange={(page) => setFilters(prev => ({ ...prev, page }))}
      />
    </div>
  );
}
```

### Pattern 2: SWR Integration

**Best for:** Real-time data that needs frequent updates

```typescript
// hooks/useStudents.ts
import useSWR from 'swr';
import { apiClient } from '@/lib/api/client';

const fetcher = (endpoint: string, params: any) =>
  apiClient.students.list(params);

export function useStudents(filters = {}) {
  const { data, error, isLoading, mutate } = useSWR(
    ['students', filters],
    () => fetcher('/students', filters),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 0, // Set to 30000 for 30-second refresh
      dedupingInterval: 2000,
    }
  );

  return {
    students: data?.data,
    metadata: data?.metadata,
    isLoading,
    error,
    refetch: mutate,
  };
}

// Usage
function StudentsPage() {
  const { students, isLoading, error, refetch } = useStudents({
    page: 1,
    limit: 20
  });

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {students?.map(student => <StudentCard key={student.id} student={student} />)}
    </div>
  );
}
```

### Pattern 3: Server-Side Fetching (Next.js App Router)

**Best for:** SEO-critical pages, initial page load performance

```typescript
// app/students/page.tsx
import { apiClient } from '@/lib/api/client';

async function getStudents() {
  const response = await apiClient.students.list({ limit: 20 });
  return response.data;
}

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div>
      <h1>Students</h1>
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

// With dynamic parameters
export default async function StudentDetailPage({
  params
}: {
  params: { id: string }
}) {
  const student = await apiClient.students.get(params.id);

  return <StudentDetail student={student} />;
}
```

### Pattern 4: Incremental Static Regeneration (ISR)

**Best for:** Content that doesn't change frequently

```typescript
// app/students/[id]/page.tsx
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  // Generate static pages for first 100 students
  const students = await apiClient.students.list({ limit: 100 });

  return students.data.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentPage({
  params
}: {
  params: { id: string }
}) {
  const student = await apiClient.students.get(params.id);

  return <StudentProfile student={student} />;
}
```

---

## Caching Strategies

### Strategy 1: Multi-Level Caching

```typescript
// lib/cache/api-cache.ts
class ApiCache {
  private memoryCache: Map<string, { data: any; timestamp: number }>;
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.memoryCache = new Map();
  }

  get(key: string): any | null {
    const cached = this.memoryCache.get(key);

    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.TTL;
    if (isExpired) {
      this.memoryCache.delete(key);
      return null;
    }

    return cached.data;
  }

  set(key: string, data: any): void {
    this.memoryCache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  clear(pattern?: string): void {
    if (!pattern) {
      this.memoryCache.clear();
      return;
    }

    // Clear keys matching pattern
    for (const key of this.memoryCache.keys()) {
      if (key.includes(pattern)) {
        this.memoryCache.delete(key);
      }
    }
  }
}

export const apiCache = new ApiCache();

// Enhanced API client with caching
class CachedApiClient {
  async get(endpoint: string, params: any = {}) {
    const cacheKey = `${endpoint}:${JSON.stringify(params)}`;

    // Check cache first
    const cached = apiCache.get(cacheKey);
    if (cached) {
      console.log('[Cache] Hit:', cacheKey);
      return cached;
    }

    // Fetch from API
    console.log('[Cache] Miss:', cacheKey);
    const data = await apiClient.get(endpoint, params);

    // Store in cache
    apiCache.set(cacheKey, data);

    return data;
  }

  invalidate(pattern?: string): void {
    apiCache.clear(pattern);
  }
}

export const cachedApiClient = new CachedApiClient();
```

### Strategy 2: LocalStorage Persistence

```typescript
// lib/cache/persistent-cache.ts
class PersistentCache {
  private readonly PREFIX = 'myjkkn_cache_';
  private readonly TTL = 10 * 60 * 1000; // 10 minutes

  get(key: string): any | null {
    try {
      const cached = localStorage.getItem(this.PREFIX + key);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > this.TTL;

      if (isExpired) {
        this.remove(key);
        return null;
      }

      return data;
    } catch {
      return null;
    }
  }

  set(key: string, data: any): void {
    try {
      const cached = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(this.PREFIX + key, JSON.stringify(cached));
    } catch (error) {
      // Handle quota exceeded
      console.warn('localStorage quota exceeded, clearing old cache');
      this.clearExpired();
    }
  }

  remove(key: string): void {
    localStorage.removeItem(this.PREFIX + key);
  }

  clearExpired(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.PREFIX)) {
        const rawKey = key.replace(this.PREFIX, '');
        if (!this.get(rawKey)) {
          // Will auto-remove if expired
        }
      }
    }
  }

  clearAll(): void {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.PREFIX)) {
        localStorage.removeItem(key);
      }
    }
  }
}

export const persistentCache = new PersistentCache();
```

### Strategy 3: Stale-While-Revalidate

```typescript
// hooks/useStaleWhileRevalidate.ts
import { useState, useEffect, useRef } from 'react';

interface SWROptions<T> {
  fetcher: () => Promise<T>;
  cacheKey: string;
  revalidateOnFocus?: boolean;
  revalidateOnReconnect?: boolean;
  refreshInterval?: number;
}

export function useStaleWhileRevalidate<T>({
  fetcher,
  cacheKey,
  revalidateOnFocus = false,
  revalidateOnReconnect = true,
  refreshInterval = 0,
}: SWROptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const revalidate = async () => {
    setIsValidating(true);
    try {
      const freshData = await fetcher();
      setData(freshData);
      persistentCache.set(cacheKey, freshData);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsValidating(false);
    }
  };

  useEffect(() => {
    // Load from cache immediately
    const cached = persistentCache.get(cacheKey);
    if (cached) {
      setData(cached);
    }

    // Then revalidate
    revalidate();

    // Set up refresh interval
    if (refreshInterval > 0) {
      const interval = setInterval(revalidate, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [cacheKey, refreshInterval]);

  useEffect(() => {
    if (!revalidateOnFocus) return;

    const handleFocus = () => revalidate();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [revalidateOnFocus]);

  useEffect(() => {
    if (!revalidateOnReconnect) return;

    const handleOnline = () => revalidate();
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [revalidateOnReconnect]);

  return { data, isValidating, error, revalidate };
}

// Usage
function StudentsPage() {
  const { data, isValidating, error, revalidate } = useStaleWhileRevalidate({
    fetcher: () => apiClient.students.list({ limit: 20 }),
    cacheKey: 'students-page-1',
    revalidateOnFocus: true,
    refreshInterval: 60000, // Refresh every minute
  });

  return (
    <div>
      {data?.data.map(student => <StudentCard key={student.id} student={student} />)}
      {isValidating && <RefreshingIndicator />}
    </div>
  );
}
```

---

## UI Component Patterns

### Pattern 1: Data Table with Server-Side Pagination

```typescript
// components/StudentsTable.tsx
import { useState } from 'react';
import { useStudents } from '@/hooks/useStudents';

export function StudentsTable() {
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');

  const { data, isLoading } = useStudents({
    ...pagination,
    ...filters,
    search,
  });

  return (
    <div className="space-y-4">
      {/* Search */}
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search students..."
      />

      {/* Filters */}
      <div className="flex gap-4">
        <InstitutionFilter
          value={filters.institution_id}
          onChange={(id) => setFilters(prev => ({ ...prev, institution_id: id }))}
        />
        <DepartmentFilter
          institutionId={filters.institution_id}
          value={filters.department_id}
          onChange={(id) => setFilters(prev => ({ ...prev, department_id: id }))}
        />
      </div>

      {/* Table */}
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map(student => (
              <tr key={student.id}>
                <td>{student.roll_number}</td>
                <td>{`${student.first_name} ${student.last_name}`}</td>
                <td>{student.department.department_name}</td>
                <td>{student.student_email}</td>
                <td>
                  <button onClick={() => viewStudent(student.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={pagination.page}
        totalPages={data?.metadata.totalPages || 1}
        onPageChange={(page) => setPagination(prev => ({ ...prev, page }))}
        itemsPerPage={pagination.limit}
        onItemsPerPageChange={(limit) =>
          setPagination({ page: 1, limit }) // Reset to page 1
        }
      />

      {/* Results info */}
      <div className="text-sm text-gray-500">
        Showing {data?.metadata.returned || 0} of {data?.metadata.total || 0} students
      </div>
    </div>
  );
}
```

### Pattern 2: Cascading Dropdowns

```typescript
// components/HierarchicalFilters.tsx
import { useState, useEffect } from 'react';

export function HierarchicalFilters({ onChange }: { onChange: (filters: any) => void }) {
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [program, setProgram] = useState('');

  const { data: institutions } = useInstitutions();
  const { data: departments } = useDepartments({ institution_id: institution });
  const { data: programs } = usePrograms({
    institution_id: institution,
    department_id: department
  });

  // Reset dependent fields when parent changes
  const handleInstitutionChange = (id: string) => {
    setInstitution(id);
    setDepartment('');
    setProgram('');
  };

  const handleDepartmentChange = (id: string) => {
    setDepartment(id);
    setProgram('');
  };

  // Notify parent of changes
  useEffect(() => {
    onChange({
      institution_id: institution || undefined,
      department_id: department || undefined,
      program_id: program || undefined,
    });
  }, [institution, department, program, onChange]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <Select
        value={institution}
        onChange={handleInstitutionChange}
        placeholder="Select Institution"
      >
        {institutions?.data.map(inst => (
          <option key={inst.id} value={inst.id}>
            {inst.name}
          </option>
        ))}
      </Select>

      <Select
        value={department}
        onChange={handleDepartmentChange}
        placeholder="Select Department"
        disabled={!institution}
      >
        {departments?.data.map(dept => (
          <option key={dept.id} value={dept.id}>
            {dept.department_name}
          </option>
        ))}
      </Select>

      <Select
        value={program}
        onChange={setProgram}
        placeholder="Select Program"
        disabled={!department}
      >
        {programs?.data.map(prog => (
          <option key={prog.id} value={prog.id}>
            {prog.program_name}
          </option>
        ))}
      </Select>
    </div>
  );
}
```

### Pattern 3: Search with Debouncing

```typescript
// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// components/StudentSearch.tsx
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useStudents } from '@/hooks/useStudents';

export function StudentSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { data, isLoading } = useStudents({
    search: debouncedSearch,
    limit: 20,
  });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search students by name, email, roll number..."
        className="w-full px-4 py-2 border rounded"
      />

      {isLoading && <Spinner className="mt-2" />}

      {data && (
        <div className="mt-4 space-y-2">
          {data.data.length === 0 ? (
            <p className="text-gray-500">No students found</p>
          ) : (
            data.data.map(student => (
              <SearchResultCard key={student.id} student={student} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
```

### Pattern 4: Infinite Scroll

```typescript
// hooks/useInfiniteStudents.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

export function useInfiniteStudents(filters = {}) {
  return useInfiniteQuery({
    queryKey: ['students-infinite', filters],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.students.list({ ...filters, page: pageParam, limit: 20 }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.metadata;
      return page < totalPages ? page + 1 : undefined;
    },
    initialPageParam: 1,
  });
}

// components/InfiniteStudentsList.tsx
import { useEffect, useRef } from 'react';
import { useInfiniteStudents } from '@/hooks/useInfiniteStudents';

export function InfiniteStudentsList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteStudents();

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.data.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ))}

      <div ref={observerTarget} className="h-10">
        {isFetchingNextPage && <Spinner />}
      </div>

      {!hasNextPage && (
        <p className="text-center text-gray-500 my-4">
          No more students to load
        </p>
      )}
    </div>
  );
}
```

---

## Performance Optimization

### Optimization 1: Request Deduplication

```typescript
// lib/api/deduplication.ts
class RequestDeduplicator {
  private pendingRequests: Map<string, Promise<any>>;

  constructor() {
    this.pendingRequests = new Map();
  }

  async dedupe<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    // Return existing promise if request is already in flight
    if (this.pendingRequests.has(key)) {
      console.log('[Dedupe] Reusing pending request:', key);
      return this.pendingRequests.get(key)!;
    }

    // Create new request
    console.log('[Dedupe] New request:', key);
    const promise = fetcher().finally(() => {
      this.pendingRequests.delete(key);
    });

    this.pendingRequests.set(key, promise);
    return promise;
  }

  clear(pattern?: string): void {
    if (!pattern) {
      this.pendingRequests.clear();
      return;
    }

    for (const key of this.pendingRequests.keys()) {
      if (key.includes(pattern)) {
        this.pendingRequests.delete(key);
      }
    }
  }
}

export const deduplicator = new RequestDeduplicator();

// Enhanced API client
class OptimizedApiClient {
  async get(endpoint: string, params: any = {}) {
    const key = `${endpoint}:${JSON.stringify(params)}`;

    return deduplicator.dedupe(key, () =>
      apiClient.get(endpoint, params)
    );
  }
}
```

### Optimization 2: Batch Requests

```typescript
// lib/api/batch-client.ts
class BatchApiClient {
  private batchQueue: Array<{
    key: string;
    fetcher: () => Promise<any>;
    resolve: (value: any) => void;
    reject: (error: any) => void;
  }> = [];
  private batchTimeout: NodeJS.Timeout | null = null;
  private readonly BATCH_DELAY = 50; // ms

  async batchFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.batchQueue.push({ key, fetcher, resolve, reject });

      if (this.batchTimeout) {
        clearTimeout(this.batchTimeout);
      }

      this.batchTimeout = setTimeout(() => {
        this.executeBatch();
      }, this.BATCH_DELAY);
    });
  }

  private async executeBatch() {
    const batch = [...this.batchQueue];
    this.batchQueue = [];

    console.log(`[Batch] Executing ${batch.length} requests`);

    const results = await Promise.allSettled(
      batch.map(item => item.fetcher())
    );

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        batch[index].resolve(result.value);
      } else {
        batch[index].reject(result.reason);
      }
    });
  }
}

export const batchClient = new BatchApiClient();

// Usage: Fetch student with all relations in one batch
async function fetchStudentWithRelations(studentId: string) {
  const [student, institution, department, program] = await Promise.all([
    batchClient.batchFetch('student', () =>
      apiClient.students.get(studentId)
    ),
    batchClient.batchFetch('institution', () =>
      apiClient.organizations.institutions.get(student.institution_id)
    ),
    batchClient.batchFetch('department', () =>
      apiClient.organizations.departments.get(student.department_id)
    ),
    batchClient.batchFetch('program', () =>
      apiClient.organizations.programs.get(student.program_id)
    ),
  ]);

  return { student, institution, department, program };
}
```

### Optimization 3: Prefetching

```typescript
// hooks/usePrefetchStudent.ts
import { useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';

export function usePrefetchStudent() {
  const queryClient = useQueryClient();

  return {
    prefetch: (studentId: string) => {
      queryClient.prefetchQuery({
        queryKey: ['student', studentId],
        queryFn: () => apiClient.students.get(studentId),
        staleTime: 5 * 60 * 1000,
      });
    },
  };
}

// Usage in list component
function StudentsList() {
  const { prefetch } = usePrefetchStudent();
  const { data } = useStudents();

  return (
    <div>
      {data?.data.map(student => (
        <Link
          key={student.id}
          href={`/students/${student.id}`}
          onMouseEnter={() => prefetch(student.id)} // Prefetch on hover
        >
          {student.first_name} {student.last_name}
        </Link>
      ))}
    </div>
  );
}
```

---

## Error Handling

### Pattern 1: Global Error Handler

```typescript
// lib/api/error-handler.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ErrorHandler {
  handle(error: unknown): void {
    if (error instanceof ApiError) {
      switch (error.status) {
        case 401:
          this.handleUnauthorized(error);
          break;
        case 403:
          this.handleForbidden(error);
          break;
        case 404:
          this.handleNotFound(error);
          break;
        case 429:
          this.handleRateLimit(error);
          break;
        case 500:
        case 502:
        case 503:
          this.handleServerError(error);
          break;
        default:
          this.handleGenericError(error);
      }
    } else if (error instanceof TypeError && error.message === 'Failed to fetch') {
      this.handleNetworkError();
    } else {
      this.handleUnknownError(error);
    }
  }

  private handleUnauthorized(error: ApiError): void {
    console.error('[Auth] Unauthorized:', error.message);
    // Redirect to login or show key renewal prompt
    window.location.href = '/auth/renew-api-key';
  }

  private handleForbidden(error: ApiError): void {
    console.error('[Auth] Forbidden:', error.message);
    toast.error('You do not have permission to access this resource.');
  }

  private handleNotFound(error: ApiError): void {
    console.error('[API] Not Found:', error.message);
    toast.error('The requested resource was not found.');
  }

  private handleRateLimit(error: ApiError): void {
    console.error('[API] Rate Limited:', error.message);
    toast.error('Too many requests. Please try again later.');
  }

  private handleServerError(error: ApiError): void {
    console.error('[API] Server Error:', error.message);
    toast.error('Server error. Our team has been notified.');
    // Log to error tracking service (Sentry, etc.)
  }

  private handleNetworkError(): void {
    console.error('[Network] Connection failed');
    toast.error('Network error. Please check your connection.');
  }

  private handleGenericError(error: ApiError): void {
    console.error('[API] Error:', error.message);
    toast.error(error.message || 'An unexpected error occurred.');
  }

  private handleUnknownError(error: unknown): void {
    console.error('[Unknown] Error:', error);
    toast.error('An unexpected error occurred.');
  }
}

export const errorHandler = new ErrorHandler();
```

### Pattern 2: Retry with Exponential Backoff

```typescript
// lib/api/retry.ts
interface RetryOptions {
  maxRetries?: number;
  baseDelay?: number;
  maxDelay?: number;
  shouldRetry?: (error: any) => boolean;
}

export async function fetchWithRetry<T>(
  fetcher: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 30000,
    shouldRetry = (error) => {
      // Retry only on network errors or 5xx server errors
      return (
        error instanceof TypeError ||
        (error instanceof ApiError && error.status >= 500)
      );
    },
  } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetcher();
    } catch (error) {
      if (attempt === maxRetries || !shouldRetry(error)) {
        throw error;
      }

      const delay = Math.min(
        baseDelay * Math.pow(2, attempt - 1),
        maxDelay
      );

      console.log(
        `[Retry] Attempt ${attempt} failed. Retrying in ${delay}ms...`
      );

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error('Max retries exceeded');
}

// Usage
const students = await fetchWithRetry(
  () => apiClient.students.list({ page: 1 }),
  { maxRetries: 3, baseDelay: 1000 }
);
```

---

## Real-World Examples

### Example 1: Student Management Dashboard

```typescript
// app/dashboard/students/page.tsx
'use client';

import { useState } from 'react';
import { useStudents } from '@/hooks/useStudents';
import { HierarchicalFilters } from '@/components/HierarchicalFilters';
import { SearchInput } from '@/components/SearchInput';
import { StudentsTable } from '@/components/StudentsTable';
import { ExportButton } from '@/components/ExportButton';

export default function StudentsDashboardPage() {
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 20 });

  const { data, isLoading, error } = useStudents({
    ...filters,
    search,
    ...pagination,
  });

  const handleExport = async () => {
    // Fetch all students with current filters
    const allStudents = await apiClient.students.list({
      ...filters,
      search,
      limit: 1000, // Large limit for export
    });

    // Convert to CSV and download
    exportToCSV(allStudents.data);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <ExportButton onClick={handleExport} />
      </div>

      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search by name, email, roll number..."
        />

        <HierarchicalFilters onChange={setFilters} />
      </div>

      {error && (
        <Alert variant="error">
          Failed to load students: {error.message}
        </Alert>
      )}

      <StudentsTable
        data={data?.data}
        isLoading={isLoading}
        pagination={{
          ...pagination,
          total: data?.metadata.total,
          totalPages: data?.metadata.totalPages,
        }}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
```

### Example 2: Student Profile Page

```typescript
// app/students/[id]/page.tsx
import { apiClient } from '@/lib/api/client';
import { notFound } from 'next/navigation';

async function getStudentWithRelations(id: string) {
  try {
    const student = await apiClient.students.get(id);

    // Fetch related data in parallel
    const [institution, department, program] = await Promise.all([
      apiClient.organizations.institutions.get(student.institution_id),
      apiClient.organizations.departments.get(student.department_id),
      apiClient.organizations.programs.get(student.program_id),
    ]);

    return { student, institution, department, program };
  } catch (error) {
    return null;
  }
}

export default async function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getStudentWithRelations(params.id);

  if (!data) {
    notFound();
  }

  const { student, institution, department, program } = data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold">
            {student.first_name} {student.last_name}
          </h1>
          <p className="text-blue-100">{student.roll_number}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Personal Info */}
          <Section title="Personal Information">
            <InfoRow label="Date of Birth" value={student.date_of_birth} />
            <InfoRow label="Gender" value={student.gender} />
            <InfoRow label="Religion" value={student.religion} />
            <InfoRow label="Community" value={student.community} />
          </Section>

          {/* Academic Info */}
          <Section title="Academic Information">
            <InfoRow label="Institution" value={institution.name} />
            <InfoRow label="Department" value={department.department_name} />
            <InfoRow label="Program" value={program.program_name} />
          </Section>

          {/* Contact Info */}
          <Section title="Contact Information">
            <InfoRow label="Student Email" value={student.student_email} />
            <InfoRow label="College Email" value={student.college_email} />
            <InfoRow label="Mobile" value={student.student_mobile} />
          </Section>

          {/* Address */}
          <Section title="Permanent Address">
            <p className="text-gray-700">
              {student.permanent_address_street}<br />
              {student.permanent_address_district}, {student.permanent_address_state}<br />
              PIN: {student.permanent_address_pin_code}
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
```

### Example 3: Department Selection Form

```typescript
// components/forms/StudentRegistrationForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInstitutions, useDepartments, usePrograms } from '@/hooks/api';

export function StudentRegistrationForm() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const institutionId = watch('institution_id');
  const departmentId = watch('department_id');

  const { data: institutions } = useInstitutions();
  const { data: departments } = useDepartments({ institution_id: institutionId });
  const { data: programs } = usePrograms({
    institution_id: institutionId,
    department_id: departmentId,
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Submit to your backend
      await fetch('/api/students/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      toast.success('Student registered successfully!');
    } catch (error) {
      toast.error('Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>First Name</label>
        <input {...register('first_name', { required: true })} />
      </div>

      <div>
        <label>Last Name</label>
        <input {...register('last_name', { required: true })} />
      </div>

      <div>
        <label>Institution</label>
        <select
          {...register('institution_id', { required: true })}
          onChange={(e) => {
            setValue('institution_id', e.target.value);
            setValue('department_id', ''); // Reset
            setValue('program_id', ''); // Reset
          }}
        >
          <option value="">Select Institution</option>
          {institutions?.data.map(inst => (
            <option key={inst.id} value={inst.id}>
              {inst.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Department</label>
        <select
          {...register('department_id', { required: true })}
          disabled={!institutionId}
          onChange={(e) => {
            setValue('department_id', e.target.value);
            setValue('program_id', ''); // Reset
          }}
        >
          <option value="">Select Department</option>
          {departments?.data.map(dept => (
            <option key={dept.id} value={dept.id}>
              {dept.department_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Program</label>
        <select
          {...register('program_id', { required: true })}
          disabled={!departmentId}
        >
          <option value="">Select Program</option>
          {programs?.data.map(prog => (
            <option key={prog.id} value={prog.id}>
              {prog.program_name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register Student'}
      </button>
    </form>
  );
}
```

---

**Last Updated:** 2025-01-31
