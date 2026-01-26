# API Integration Skill

---
name: api-integration
description: Advanced skill for integrating child applications with MyJKKN parent app API. Use when developers need to generate API keys, fetch data from endpoints (students, staff, organizations), build UI components with API data, implement authentication, or set up data integration for child applications. Provides templates, working examples, and automated client generation.
tags: api, integration, authentication, child-app, data-fetching
---

## Overview

This skill enables efficient integration of child applications with the MyJKKN parent application API. It provides comprehensive guidance, automated tools, and ready-to-use templates for:

- API key generation and management
- Authentication and authorization flows
- Data fetching from 16+ available endpoints
- Building UI components (tables, dropdowns, forms) with API data
- Implementing pagination, filtering, and search
- Error handling and retry logic
- TypeScript type safety
- Performance optimization

## When to Use This Skill

Invoke this skill when:

- Setting up a new child application that needs MyJKKN data
- Integrating API endpoints into existing applications
- Generating API clients for different frameworks
- Implementing data tables, dropdowns, or forms with API data
- Debugging API authentication or data fetching issues
- Optimizing API calls and reducing redundant requests
- Creating TypeScript-safe API integrations
- Building search and filter functionality with API data

## Quick Start Workflow

### 1. Generate API Key

First, understand the API key generation process:

1. Navigate to System → API Management in MyJKKN parent app
2. Click "Generate New API Key"
3. Provide a descriptive name (e.g., "Mobile App Production")
4. Set expiration date (optional, recommended for production keys)
5. Copy the generated key immediately (shown only once)
6. Store securely in environment variables

**Key Format**: `jk_{randomString}_{timestamp}`

**Security Notes**:
- Plain text keys are never stored in the database
- Only SHA-256 hash is persisted
- Keys can be activated/deactivated without deletion
- Monitor `last_used_at` timestamp for usage tracking

### 2. Set Up Environment

Configure environment variables in child application:

```env
# .env.local or .env
NEXT_PUBLIC_MYJKKN_API_URL=https://jkkn.ai/api
MYJKKN_API_KEY=jk_xxxxx_xxxxx
```

**Important**:
- Use `NEXT_PUBLIC_` prefix only if key needs to be exposed to client-side
- Prefer server-side API calls for sensitive operations
- Never commit API keys to version control

### 3. Generate API Client

Use the provided script to generate framework-specific API client:

```bash
# React/Next.js client with TypeScript
python scripts/generate_api_client.py --framework nextjs --output ./lib/api

# Vanilla JavaScript client
python scripts/generate_api_client.py --framework vanilla --output ./src/api

# Express.js backend client
python scripts/generate_api_client.py --framework express --output ./services
```

Alternatively, use the pre-built templates in `assets/` directory.

### 4. Test Connection

Verify API key and connectivity:

```bash
# Test API endpoint
python scripts/test_endpoint.py --endpoint students --key jk_xxxxx_xxxxx

# Test with pagination
python scripts/test_endpoint.py --endpoint students --key jk_xxxxx_xxxxx --page 1 --limit 10
```

## Available API Endpoints

MyJKKN provides 16+ REST API endpoints organized by domain:

### Students API
- `GET /api/api-management/students` - List students (paginated)
- `GET /api/api-management/students/{id}` - Get student details

**Filters**: `institution_id`, `department_id`, `program_id`, `is_profile_complete`, `search`

### Staff API
- `GET /api/api-management/staff` - List staff (paginated)
- `GET /api/api-management/staff/{id}` - Get staff details
- `GET /api/api-management/staff?all=true` - Fetch all staff (no pagination)

**Filters**: `institution_id`, `department_id`, `category_id`, `is_active`, `search`

### Organization API
- `GET /api/api-management/organizations/institutions` - List institutions
- `GET /api/api-management/organizations/departments` - List departments
- `GET /api/api-management/organizations/programs` - List programs
- `GET /api/api-management/organizations/degrees` - List degrees
- `GET /api/api-management/organizations/courses` - List courses
- `GET /api/api-management/organizations/semesters` - List semesters

**Each endpoint supports**: Pagination, filtering by hierarchy (institution → degree → department → program), active status filtering, and search.

**Detailed Documentation**: See `references/api_endpoints.md` for complete endpoint specifications, request/response formats, and examples.

## Authentication

All API requests require Bearer token authentication:

```typescript
headers: {
  'Authorization': `Bearer ${apiKey}`,
  'Accept': 'application/json'
}
```

**Authentication Flow**:
1. Client sends API key in Authorization header
2. Server hashes the provided key using SHA-256
3. Server verifies hash against database
4. Server checks key expiration and active status
5. Server validates read/write permissions
6. Request proceeds if all checks pass

**Error Responses**:
- `401 Unauthorized` - Missing, invalid, or expired API key
- `403 Forbidden` - Insufficient permissions (e.g., no read access)

**Reference**: See `references/authentication_guide.md` for detailed auth implementation.

## Common Integration Patterns

### Pattern 1: Paginated Data Table

Fetch paginated data for data tables with search and filters:

```typescript
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api/client';

export function useStudents(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await apiClient.students.list({
          ...filters,
          page: pagination.page,
          limit: pagination.limit
        });
        setData(response.data);
        setPagination(prev => ({
          ...prev,
          total: response.metadata.total
        }));
      } catch (error) {
        console.error('Failed to fetch students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [filters, pagination.page, pagination.limit]);

  return { data, loading, pagination, setPagination };
}
```

### Pattern 2: Dropdown with API Data

Populate dropdown/select components with API data:

```typescript
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api/client';

export function useDepartments(institutionId: string) {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!institutionId) return;

    const fetchDepartments = async () => {
      setLoading(true);
      try {
        // Fetch all departments without pagination
        const response = await apiClient.organizations.departments.list({
          institution_id: institutionId,
          limit: 1000 // Large limit to get all
        });
        setDepartments(response.data);
      } catch (error) {
        console.error('Failed to fetch departments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [institutionId]);

  return { departments, loading };
}

// Usage in component
function MyForm() {
  const { departments, loading } = useDepartments(selectedInstitution);

  return (
    <Select disabled={loading}>
      {departments.map(dept => (
        <option key={dept.id} value={dept.id}>
          {dept.department_name}
        </option>
      ))}
    </Select>
  );
}
```

### Pattern 3: Cascading Dropdowns

Implement hierarchical dropdowns (institution → department → program):

```typescript
export function CascadingFilters() {
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [program, setProgram] = useState('');

  const { institutions } = useInstitutions();
  const { departments } = useDepartments(institution);
  const { programs } = usePrograms(institution, department);

  return (
    <div>
      <Select value={institution} onChange={(e) => {
        setInstitution(e.target.value);
        setDepartment(''); // Reset dependent fields
        setProgram('');
      }}>
        {institutions.map(inst => (
          <option key={inst.id} value={inst.id}>{inst.name}</option>
        ))}
      </Select>

      <Select
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
          setProgram(''); // Reset dependent field
        }}
        disabled={!institution}
      >
        {departments.map(dept => (
          <option key={dept.id} value={dept.id}>
            {dept.department_name}
          </option>
        ))}
      </Select>

      <Select
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        disabled={!department}
      >
        {programs.map(prog => (
          <option key={prog.id} value={prog.id}>
            {prog.program_name}
          </option>
        ))}
      </Select>
    </div>
  );
}
```

### Pattern 4: Search with Debouncing

Implement efficient search with debounced API calls:

```typescript
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { apiClient } from '@/lib/api/client';

export function StudentSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const response = await apiClient.students.list({
          search: debouncedSearch,
          limit: 20
        });
        setResults(response.data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [debouncedSearch]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search students..."
      />
      {loading && <Spinner />}
      <SearchResults results={results} />
    </div>
  );
}
```

### Pattern 5: Infinite Scroll / Load More

Implement infinite scroll pagination:

```typescript
export function InfiniteStudentList() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await apiClient.students.list({
        page,
        limit: 20
      });

      setStudents(prev => [...prev, ...response.data]);
      setPage(prev => prev + 1);
      setHasMore(response.metadata.page < response.metadata.totalPages);
    } catch (error) {
      console.error('Failed to load more:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, []); // Load initial page

  return (
    <div>
      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
```

**More Patterns**: See `references/integration_patterns.md` for additional patterns including caching, optimistic updates, error recovery, and bulk operations.

## TypeScript Type Safety

All endpoints have complete TypeScript type definitions available in `assets/typescript-types/`.

### Using Types

```typescript
import type { Student, Staff, Department, ApiResponse } from '@/types/api';

// Type-safe API calls
const response: ApiResponse<Student[]> = await apiClient.students.list({
  page: 1,
  limit: 10
});

// Type-safe data handling
const students: Student[] = response.data;
const metadata: PaginationMetadata = response.metadata;

// Type-safe filters
interface StudentFilters {
  institution_id?: string;
  department_id?: string;
  program_id?: string;
  search?: string;
  is_profile_complete?: boolean;
}
```

### Generating Types

Copy TypeScript definitions from `assets/typescript-types/` to your project:

```bash
# Copy all type definitions
cp .claude/skills/api-integration/assets/typescript-types/* ./types/

# Or cherry-pick specific types
cp .claude/skills/api-integration/assets/typescript-types/student.ts ./types/
```

**Reference**: See `references/data_models.md` for complete type definitions and data models.

## Error Handling

Implement robust error handling for production applications:

```typescript
import { apiClient, ApiError } from '@/lib/api/client';

async function fetchStudents() {
  try {
    const response = await apiClient.students.list({ page: 1 });
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      // Handle specific API errors
      switch (error.status) {
        case 401:
          // Unauthorized - API key invalid or expired
          console.error('Authentication failed:', error.message);
          // Redirect to login or show key renewal prompt
          break;
        case 403:
          // Forbidden - insufficient permissions
          console.error('Permission denied:', error.message);
          break;
        case 404:
          // Not found
          console.error('Resource not found:', error.message);
          break;
        case 429:
          // Rate limit exceeded (future)
          console.error('Rate limit exceeded, retrying...');
          // Implement exponential backoff
          break;
        case 500:
          // Server error
          console.error('Server error:', error.message);
          // Show generic error message
          break;
        default:
          console.error('API error:', error.message);
      }
    } else {
      // Handle network errors
      console.error('Network error:', error);
    }
    throw error;
  }
}
```

### Retry Logic

Implement automatic retries for transient failures:

```typescript
async function fetchWithRetry<T>(
  fetchFn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fetchFn();
    } catch (error) {
      if (attempt === maxRetries) throw error;

      // Only retry on network errors or 5xx server errors
      if (error instanceof ApiError && error.status < 500) {
        throw error;
      }

      // Exponential backoff
      await new Promise(resolve =>
        setTimeout(resolve, delay * Math.pow(2, attempt - 1))
      );
    }
  }
  throw new Error('Max retries exceeded');
}

// Usage
const students = await fetchWithRetry(() =>
  apiClient.students.list({ page: 1 })
);
```

## Performance Optimization

### Caching Strategies

Implement caching to reduce redundant API calls:

```typescript
import { useQuery } from '@tanstack/react-query';

// React Query automatically caches and deduplicates requests
export function useStudents(filters) {
  return useQuery({
    queryKey: ['students', filters],
    queryFn: () => apiClient.students.list(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
}
```

### Request Deduplication

Prevent duplicate simultaneous requests:

```typescript
const requestCache = new Map();

async function fetchWithDedup(key, fetchFn) {
  if (requestCache.has(key)) {
    return requestCache.get(key);
  }

  const promise = fetchFn().finally(() => {
    requestCache.delete(key);
  });

  requestCache.set(key, promise);
  return promise;
}

// Usage
const students = await fetchWithDedup('students-page-1', () =>
  apiClient.students.list({ page: 1 })
);
```

### Batch Requests

Fetch multiple related resources efficiently:

```typescript
async function fetchStudentWithRelations(studentId: string) {
  // Fetch student and related data in parallel
  const [student, institution, department, program] = await Promise.all([
    apiClient.students.get(studentId),
    apiClient.organizations.institutions.get(student.institution_id),
    apiClient.organizations.departments.get(student.department_id),
    apiClient.organizations.programs.get(student.program_id),
  ]);

  return {
    ...student,
    institution,
    department,
    program
  };
}
```

## Testing API Integration

### Unit Testing

Test API client functions:

```typescript
import { apiClient } from '@/lib/api/client';

// Mock API client for testing
jest.mock('@/lib/api/client');

test('fetchStudents returns data', async () => {
  const mockData = [{ id: '1', first_name: 'John' }];
  apiClient.students.list.mockResolvedValue({
    data: mockData,
    metadata: { total: 1, page: 1, limit: 10 }
  });

  const result = await apiClient.students.list({ page: 1 });

  expect(result.data).toEqual(mockData);
  expect(apiClient.students.list).toHaveBeenCalledWith({ page: 1 });
});
```

### Integration Testing

Test with real API (using test key):

```typescript
describe('API Integration', () => {
  const testApiKey = process.env.TEST_API_KEY;

  test('fetch students with valid key', async () => {
    const response = await fetch(
      'https://jkkn.ai/api/api-management/students?limit=1',
      {
        headers: {
          'Authorization': `Bearer ${testApiKey}`,
        }
      }
    );

    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data).toHaveProperty('data');
    expect(data).toHaveProperty('metadata');
  });
});
```

## Debugging Guide

### Common Issues

**Issue: 401 Unauthorized**
- Verify API key is correct and not expired
- Check Authorization header format: `Bearer {key}`
- Confirm key is active in MyJKKN API Management

**Issue: 403 Forbidden**
- Check API key permissions (read/write)
- Verify key has necessary access scope

**Issue: Empty Response**
- Check filters - may be too restrictive
- Verify institution_id matches available data
- Test without filters first

**Issue: Slow Performance**
- Implement caching (React Query recommended)
- Use pagination effectively
- Fetch only needed fields
- Consider using `?all=true` for small datasets (staff)

### Debug Logging

Enable debug mode in API client:

```typescript
// In development
if (process.env.NODE_ENV === 'development') {
  apiClient.enableDebug();
}

// Manual logging
const response = await apiClient.students.list({ page: 1 });
console.log('Request:', response.request);
console.log('Response:', response.data);
console.log('Metadata:', response.metadata);
```

## Security Best Practices

1. **Never Expose API Keys**
   - Store in environment variables
   - Use server-side API calls when possible
   - Rotate keys regularly (every 90 days recommended)

2. **Validate Data**
   - Always validate API responses before using
   - Check for expected data structures
   - Handle null/undefined values gracefully

3. **Rate Limiting** (Future Consideration)
   - Implement client-side throttling
   - Cache responses appropriately
   - Use debouncing for search inputs

4. **CORS Configuration**
   - MyJKKN API allows all origins (`*`) currently
   - Consider IP whitelisting for production
   - Use HTTPS only in production

5. **Monitor Usage**
   - Check `last_used_at` timestamps regularly
   - Set up alerts for unusual activity
   - Deactivate unused keys

## Production Deployment Checklist

- [ ] Generate production API key (no expiration or long-lived)
- [ ] Store API key securely in environment variables
- [ ] Implement error handling and retry logic
- [ ] Add request logging and monitoring
- [ ] Set up caching strategy (React Query or similar)
- [ ] Implement loading and error states in UI
- [ ] Test with production data volume
- [ ] Configure CORS if needed
- [ ] Document API key rotation process
- [ ] Set up monitoring for API key usage
- [ ] Test error scenarios (expired key, invalid key, rate limiting)
- [ ] Implement graceful degradation if API unavailable

## Quick Reference

### Endpoints Summary
```
Students:  GET /api/api-management/students
Staff:     GET /api/api-management/staff
Institutions: GET /api/api-management/organizations/institutions
Departments:  GET /api/api-management/organizations/departments
Programs:     GET /api/api-management/organizations/programs
Degrees:      GET /api/api-management/organizations/degrees
Courses:      GET /api/api-management/organizations/courses
Semesters:    GET /api/api-management/organizations/semesters
```

### Common Query Parameters
```
page=1             - Page number (1-indexed)
limit=10           - Items per page
search=term        - Search query
institution_id=id  - Filter by institution
department_id=id   - Filter by department
program_id=id      - Filter by program
is_active=true     - Filter by active status
all=true           - Fetch all (staff only, no pagination)
```

### Authentication Header
```
Authorization: Bearer jk_xxxxx_xxxxx
```

## Resources

- **Complete API Documentation**: `references/api_endpoints.md`
- **Authentication Guide**: `references/authentication_guide.md`
- **Integration Patterns**: `references/integration_patterns.md`
- **Data Models**: `references/data_models.md`

- **React/Next.js Template**: `assets/react-nextjs-client/`
- **Vanilla JS Template**: `assets/vanilla-js-client/`
- **TypeScript Types**: `assets/typescript-types/`
- **Working Examples**: `assets/examples/`

- **Generate API Client**: `scripts/generate_api_client.py`
- **Test Endpoint**: `scripts/test_endpoint.py`

## Support

For API-related issues or questions:
1. Check `references/` documentation first
2. Test with `scripts/test_endpoint.py`
3. Review working examples in `assets/examples/`
4. Contact MyJKKN API administrator for key issues
5. Report bugs in MyJKKN parent application repository

---

**Last Updated**: 2025-01-31
**Skill Version**: 1.0.0
**Compatible with**: MyJKKN Parent App API v1
