# Data Models & TypeScript Types

Complete TypeScript type definitions for all MyJKKN API entities.

---

## Core Types

### API Response Wrapper

```typescript
export interface ApiResponse<T> {
  data: T;
  metadata?: PaginationMetadata;
}

export interface PaginationMetadata {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  returned?: number;
}

export interface ApiError {
  error: string;
  status?: number;
  code?: string;
}
```

---

## Student Types

### Student (Complete Profile)

```typescript
export interface Student {
  // Identity
  id: string; // UUID
  roll_number: string;

  // Personal Information
  first_name: string;
  last_name: string;
  date_of_birth: string; // ISO date string
  gender: 'Male' | 'Female' | 'Other';
  religion: string;
  community: string;

  // Contact Information
  student_email: string;
  college_email: string;
  student_mobile: string;

  // Family Information
  father_name: string;
  mother_name: string;

  // Address
  permanent_address_street: string;
  permanent_address_district: string;
  permanent_address_state: string;
  permanent_address_pin_code: string;

  // Academic Relationships (populated)
  institution: Institution;
  department: Department;
  program: Program;
  degree: Degree;

  // Status
  is_profile_complete: boolean;

  // Timestamps
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}
```

### Student (List View)

```typescript
export interface StudentListItem {
  id: string;
  first_name: string;
  last_name: string;
  roll_number: string;
  student_email: string;
  college_email: string;
  student_mobile: string;
  institution: {
    id: string;
    name: string;
  };
  department: {
    id: string;
    department_name: string;
  };
  program: {
    id: string;
    program_name: string;
  };
  degree: {
    id: string;
    degree_name: string;
  };
  is_profile_complete: boolean;
  created_at: string;
  updated_at: string;
}
```

### Student Filters

```typescript
export interface StudentFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: first_name, last_name, email, mobile, roll_number
  institution_id?: string;
  department_id?: string;
  program_id?: string;
  is_profile_complete?: boolean;
}
```

---

## Staff Types

### Staff (Complete Profile)

```typescript
export interface Staff {
  // Identity
  id: string; // UUID
  staff_id: string;

  // Personal Information
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;

  // Employment
  category: EmploymentCategory;

  // Relationships (populated)
  institution: Institution;
  department: Department;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Employment Category

```typescript
export interface EmploymentCategory {
  id: string;
  category_name: string;
  // Examples: "Professor", "Associate Professor", "Assistant Professor", "Lecturer"
}
```

### Staff Filters

```typescript
export interface StaffFilters {
  page?: number;
  limit?: number;
  all?: boolean; // If true, fetches all records without pagination
  search?: string; // Searches: first_name, last_name, email, staff_id
  institution_id?: string;
  department_id?: string;
  category_id?: string;
  is_active?: boolean;
}
```

---

## Organization Types

### Institution

```typescript
export interface Institution {
  // Identity
  id: string; // UUID
  name: string;
  counselling_code: string;

  // Details
  category: string; // e.g., "Engineering", "Arts & Science"
  phone: string;
  email: string;
  website: string;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Institution Filters

```typescript
export interface InstitutionFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: name, counselling_code
  isActive?: boolean;
}
```

### Department

```typescript
export interface Department {
  // Identity
  id: string; // UUID
  department_name: string;
  department_code: string;

  // Relationships
  institution_id: string;
  degree_id: string;

  // Populated Relationships
  institution: Institution;
  degree: Degree;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Department Filters

```typescript
export interface DepartmentFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: department_name, department_code
  institution_id?: string;
  degree_id?: string;
  isActive?: boolean;
}
```

### Program

```typescript
export interface Program {
  // Identity
  id: string; // UUID
  program_id: string; // e.g., "BECS", "MECS"
  program_name: string; // e.g., "B.E Computer Science"

  // Relationships
  institution_id: string;
  department_id: string;
  degree_id: string;

  // Populated Relationships
  institution: Institution;
  department: Department;
  degree: Degree;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Program Filters

```typescript
export interface ProgramFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: program_name, program_id
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  isActive?: boolean;
}
```

### Degree

```typescript
export interface Degree {
  // Identity
  id: string; // UUID
  degree_id: string; // e.g., "BE", "ME", "BSc", "MSc"
  degree_name: string; // e.g., "Bachelor of Engineering"

  // Classification
  degree_type: 'UG' | 'PG' | 'Diploma' | 'Certificate';

  // Relationships
  institution_id: string;

  // Populated Relationships
  institution: Institution;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Degree Filters

```typescript
export interface DegreeFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: degree_name, degree_id
  institution_id?: string;
  degree_type?: 'UG' | 'PG' | 'Diploma' | 'Certificate';
  isActive?: boolean;
}
```

### Course

```typescript
export interface Course {
  // Identity
  id: string; // UUID
  course_code: string; // e.g., "CS101", "MA201"
  course_name: string; // e.g., "Introduction to Programming"

  // Relationships
  institution_id: string;
  degree_id: string;
  department_id: string;
  program_id: string;

  // Populated Relationships
  institution: Institution;
  department: Department;
  program: Program;
  degree: Degree;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Course Filters

```typescript
export interface CourseFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: course_name, course_code
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  program_id?: string;
  isActive?: boolean;
}
```

### Semester

```typescript
export interface Semester {
  // Identity
  id: string; // UUID
  semester_code: string; // e.g., "SEM1", "SEM2"
  semester_name: string; // e.g., "Semester 1"

  // Classification
  semester_type: 'odd' | 'even';

  // Relationships
  institution_id: string;
  degree_id: string;
  department_id: string;
  program_id: string;
  course_id: string;

  // Populated Relationships
  institution: Institution;
  degree: Degree;
  department: Department;
  program: Program;
  course: Course;

  // Status
  is_active: boolean;

  // Timestamps
  created_at: string;
  updated_at: string;
}
```

### Semester Filters

```typescript
export interface SemesterFilters {
  page?: number;
  limit?: number;
  search?: string; // Searches: semester_name, semester_code
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  program_id?: string;
  course_id?: string;
  semester_type?: 'odd' | 'even';
  is_active?: boolean;
}
```

---

## API Client Types

### API Client Interface

```typescript
export interface MyJKKNApiClient {
  students: {
    list: (filters?: StudentFilters) => Promise<ApiResponse<StudentListItem[]>>;
    get: (id: string) => Promise<ApiResponse<Student>>;
  };

  staff: {
    list: (filters?: StaffFilters) => Promise<ApiResponse<Staff[]>>;
    get: (id: string) => Promise<ApiResponse<Staff>>;
  };

  organizations: {
    institutions: {
      list: (filters?: InstitutionFilters) => Promise<ApiResponse<Institution[]>>;
      get: (id: string) => Promise<ApiResponse<Institution>>;
    };
    departments: {
      list: (filters?: DepartmentFilters) => Promise<ApiResponse<Department[]>>;
      get: (id: string) => Promise<ApiResponse<Department>>;
    };
    programs: {
      list: (filters?: ProgramFilters) => Promise<ApiResponse<Program[]>>;
      get: (id: string) => Promise<ApiResponse<Program>>;
    };
    degrees: {
      list: (filters?: DegreeFilters) => Promise<ApiResponse<Degree[]>>;
      get: (id: string) => Promise<ApiResponse<Degree>>;
    };
    courses: {
      list: (filters?: CourseFilters) => Promise<ApiResponse<Course[]>>;
      get: (id: string) => Promise<ApiResponse<Course>>;
    };
    semesters: {
      list: (filters?: SemesterFilters) => Promise<ApiResponse<Semester[]>>;
      get: (id: string) => Promise<ApiResponse<Semester>>;
    };
  };
}
```

---

## Utility Types

### API Request Options

```typescript
export interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  signal?: AbortSignal;
  cache?: RequestCache;
}
```

### Query Builder

```typescript
export type QueryParams = Record<string, string | number | boolean | undefined>;

export function buildQueryString(params: QueryParams): string {
  const filteredParams = Object.entries(params).filter(
    ([_, value]) => value !== undefined && value !== null && value !== ''
  );

  if (filteredParams.length === 0) return '';

  return (
    '?' +
    filteredParams
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&')
  );
}
```

### Type Guards

```typescript
export function isStudent(entity: any): entity is Student {
  return (
    entity &&
    typeof entity === 'object' &&
    'roll_number' in entity &&
    'student_email' in entity
  );
}

export function isStaff(entity: any): entity is Staff {
  return (
    entity &&
    typeof entity === 'object' &&
    'staff_id' in entity &&
    'category' in entity
  );
}

export function isApiError(response: any): response is ApiError {
  return response && typeof response === 'object' && 'error' in response;
}

export function isPaginatedResponse<T>(
  response: any
): response is ApiResponse<T[]> {
  return (
    response &&
    typeof response === 'object' &&
    'data' in response &&
    'metadata' in response &&
    Array.isArray(response.data)
  );
}
```

---

## React Hook Types

### useStudents Hook

```typescript
export interface UseStudentsReturn {
  students: StudentListItem[] | undefined;
  metadata: PaginationMetadata | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useStudents(
  filters?: StudentFilters
): UseStudentsReturn;
```

### useInstitutions Hook

```typescript
export interface UseInstitutionsReturn {
  institutions: Institution[] | undefined;
  metadata: PaginationMetadata | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useInstitutions(
  filters?: InstitutionFilters
): UseInstitutionsReturn;
```

---

## Enum Types

### Gender

```typescript
export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}
```

### Degree Type

```typescript
export enum DegreeType {
  UG = 'UG',
  PG = 'PG',
  Diploma = 'Diploma',
  Certificate = 'Certificate',
}
```

### Semester Type

```typescript
export enum SemesterType {
  Odd = 'odd',
  Even = 'even',
}
```

---

## Validation Schemas

### Student Schema (Zod Example)

```typescript
import { z } from 'zod';

export const StudentSchema = z.object({
  id: z.string().uuid(),
  roll_number: z.string().min(1),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  student_email: z.string().email(),
  college_email: z.string().email(),
  student_mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  date_of_birth: z.string().datetime(),
  gender: z.enum(['Male', 'Female', 'Other']),
  religion: z.string(),
  community: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  permanent_address_street: z.string(),
  permanent_address_district: z.string(),
  permanent_address_state: z.string(),
  permanent_address_pin_code: z.string().regex(/^\d{6}$/),
  institution: z.object({
    id: z.string().uuid(),
    name: z.string(),
  }),
  department: z.object({
    id: z.string().uuid(),
    department_name: z.string(),
  }),
  program: z.object({
    id: z.string().uuid(),
    program_name: z.string(),
  }),
  degree: z.object({
    id: z.string().uuid(),
    degree_name: z.string(),
  }),
  is_profile_complete: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type StudentSchemaType = z.infer<typeof StudentSchema>;
```

---

## Complete Type Definitions File

### types/api.ts (Copy-Paste Ready)

```typescript
// ===========================
// Core API Types
// ===========================

export interface ApiResponse<T> {
  data: T;
  metadata?: PaginationMetadata;
}

export interface PaginationMetadata {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  returned?: number;
}

export interface ApiError {
  error: string;
  status?: number;
  code?: string;
}

// ===========================
// Student Types
// ===========================

export interface Student {
  id: string;
  roll_number: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'Male' | 'Female' | 'Other';
  religion: string;
  community: string;
  student_email: string;
  college_email: string;
  student_mobile: string;
  father_name: string;
  mother_name: string;
  permanent_address_street: string;
  permanent_address_district: string;
  permanent_address_state: string;
  permanent_address_pin_code: string;
  institution: Institution;
  department: Department;
  program: Program;
  degree: Degree;
  is_profile_complete: boolean;
  created_at: string;
  updated_at: string;
}

export interface StudentListItem {
  id: string;
  first_name: string;
  last_name: string;
  roll_number: string;
  student_email: string;
  college_email: string;
  student_mobile: string;
  institution: { id: string; name: string };
  department: { id: string; department_name: string };
  program: { id: string; program_name: string };
  degree: { id: string; degree_name: string };
  is_profile_complete: boolean;
  created_at: string;
  updated_at: string;
}

export interface StudentFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  department_id?: string;
  program_id?: string;
  is_profile_complete?: boolean;
}

// ===========================
// Staff Types
// ===========================

export interface Staff {
  id: string;
  staff_id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  category: EmploymentCategory;
  institution: Institution;
  department: Department;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface EmploymentCategory {
  id: string;
  category_name: string;
}

export interface StaffFilters {
  page?: number;
  limit?: number;
  all?: boolean;
  search?: string;
  institution_id?: string;
  department_id?: string;
  category_id?: string;
  is_active?: boolean;
}

// ===========================
// Organization Types
// ===========================

export interface Institution {
  id: string;
  name: string;
  counselling_code: string;
  category: string;
  phone: string;
  email: string;
  website: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface InstitutionFilters {
  page?: number;
  limit?: number;
  search?: string;
  isActive?: boolean;
}

export interface Department {
  id: string;
  department_name: string;
  department_code: string;
  institution_id: string;
  degree_id: string;
  institution: Institution;
  degree: Degree;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DepartmentFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  degree_id?: string;
  isActive?: boolean;
}

export interface Program {
  id: string;
  program_id: string;
  program_name: string;
  institution_id: string;
  department_id: string;
  degree_id: string;
  institution: Institution;
  department: Department;
  degree: Degree;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProgramFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  isActive?: boolean;
}

export interface Degree {
  id: string;
  degree_id: string;
  degree_name: string;
  degree_type: 'UG' | 'PG' | 'Diploma' | 'Certificate';
  institution_id: string;
  institution: Institution;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DegreeFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  degree_type?: 'UG' | 'PG' | 'Diploma' | 'Certificate';
  isActive?: boolean;
}

export interface Course {
  id: string;
  course_code: string;
  course_name: string;
  institution_id: string;
  degree_id: string;
  department_id: string;
  program_id: string;
  institution: Institution;
  department: Department;
  program: Program;
  degree: Degree;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  program_id?: string;
  isActive?: boolean;
}

export interface Semester {
  id: string;
  semester_code: string;
  semester_name: string;
  semester_type: 'odd' | 'even';
  institution_id: string;
  degree_id: string;
  department_id: string;
  program_id: string;
  course_id: string;
  institution: Institution;
  degree: Degree;
  department: Department;
  program: Program;
  course: Course;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SemesterFilters {
  page?: number;
  limit?: number;
  search?: string;
  institution_id?: string;
  degree_id?: string;
  department_id?: string;
  program_id?: string;
  course_id?: string;
  semester_type?: 'odd' | 'even';
  is_active?: boolean;
}

// ===========================
// Utility Functions
// ===========================

export type QueryParams = Record<string, string | number | boolean | undefined>;

export function buildQueryString(params: QueryParams): string {
  const filteredParams = Object.entries(params).filter(
    ([_, value]) => value !== undefined && value !== null && value !== ''
  );

  if (filteredParams.length === 0) return '';

  return (
    '?' +
    filteredParams
      .map(([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      )
      .join('&')
  );
}

export function isApiError(response: any): response is ApiError {
  return response && typeof response === 'object' && 'error' in response;
}
```

---

**Last Updated:** 2025-01-31
