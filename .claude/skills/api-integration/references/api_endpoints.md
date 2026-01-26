# API Endpoints Reference

Complete documentation for all MyJKKN Parent App API endpoints.

## Base URL

```
Production: https://jkkn.ai/api
Development: http://localhost:3000/api
```

## Authentication

All endpoints require Bearer token authentication:

```http
Authorization: Bearer {api_key}
```

---

## Students API

### List Students

```http
GET /api/api-management/students
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10, max: 100) |
| search | string | No | Search by first_name, last_name, email, mobile, roll_number |
| institution_id | string | No | Filter by institution UUID |
| department_id | string | No | Filter by department UUID |
| program_id | string | No | Filter by program UUID |
| is_profile_complete | boolean | No | Filter by profile completion status |

**Response:**

```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "first_name": "John",
      "last_name": "Doe",
      "roll_number": "2024CS001",
      "student_email": "john@example.com",
      "college_email": "john.doe@jkkn.edu.in",
      "student_mobile": "+91 9876543210",
      "father_name": "Michael Doe",
      "mother_name": "Jane Doe",
      "date_of_birth": "2005-05-15",
      "gender": "Male",
      "religion": "Christian",
      "community": "General",
      "institution": {
        "id": "inst-uuid",
        "name": "JKKN College of Engineering & Technology"
      },
      "department": {
        "id": "dept-uuid",
        "department_name": "Computer Science and Engineering"
      },
      "program": {
        "id": "prog-uuid",
        "program_name": "B.E Computer Science"
      },
      "degree": {
        "id": "degree-uuid",
        "degree_name": "Bachelor of Engineering"
      },
      "is_profile_complete": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "total": 1250,
    "page": 1,
    "limit": 10,
    "totalPages": 125,
    "returned": 10
  }
}
```

**Example Requests:**

```bash
# Get first page
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/students?page=1&limit=10"

# Search students
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/students?search=john"

# Filter by institution
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/students?institution_id=inst-uuid"

# Multiple filters
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/students?institution_id=inst-uuid&department_id=dept-uuid&is_profile_complete=true"
```

### Get Student by ID

```http
GET /api/api-management/students/{id}
```

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Student UUID |

**Response:**

```json
{
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "first_name": "John",
    "last_name": "Doe",
    "roll_number": "2024CS001",
    "student_email": "john@example.com",
    "college_email": "john.doe@jkkn.edu.in",
    "student_mobile": "+91 9876543210",
    "father_name": "Michael Doe",
    "mother_name": "Jane Doe",
    "date_of_birth": "2005-05-15",
    "gender": "Male",
    "religion": "Christian",
    "community": "General",
    "permanent_address_street": "123 Main Street",
    "permanent_address_district": "Coimbatore",
    "permanent_address_state": "Tamil Nadu",
    "permanent_address_pin_code": "641659",
    "institution": { /* ... */ },
    "department": { /* ... */ },
    "program": { /* ... */ },
    "degree": { /* ... */ },
    "is_profile_complete": true
  }
}
```

**Error Response:**

```json
{
  "error": "Student not found"
}
```

---

## Staff API

### List Staff

```http
GET /api/api-management/staff
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10, max: 100) |
| all | boolean | No | Fetch all records without pagination (set to "true") |
| search | string | No | Search by first_name, last_name, email, staff_id |
| institution_id | string | No | Filter by institution UUID |
| department_id | string | No | Filter by department UUID |
| category_id | string | No | Filter by employment category UUID |
| is_active | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "staff-uuid",
      "staff_id": "STAFF2024001",
      "first_name": "Dr. Sarah",
      "last_name": "Johnson",
      "email": "sarah.johnson@jkkn.edu.in",
      "mobile": "+91 9876543210",
      "category": {
        "id": "cat-uuid",
        "category_name": "Professor"
      },
      "institution": {
        "id": "inst-uuid",
        "name": "JKKN College of Engineering & Technology"
      },
      "department": {
        "id": "dept-uuid",
        "department_name": "Computer Science and Engineering"
      },
      "is_active": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "total": 150,
    "page": 1,
    "limit": 10,
    "totalPages": 15,
    "returned": 10
  }
}
```

**Example Requests:**

```bash
# Get paginated staff
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/staff?page=1&limit=10"

# Get ALL staff (no pagination)
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/staff?all=true"

# Filter by department
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/staff?department_id=dept-uuid"

# Search staff
curl -H "Authorization: Bearer jk_xxxxx" \
  "https://jkkn.ai/api/api-management/staff?search=sarah"
```

### Get Staff by ID

```http
GET /api/api-management/staff/{id}
```

**Response:** Similar structure to list endpoint but returns single staff object.

---

## Organization API

### List Institutions

```http
GET /api/api-management/organizations/institutions
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by name, counselling_code |
| isActive | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "inst-uuid",
      "name": "JKKN College of Engineering & Technology",
      "counselling_code": "2711",
      "category": "Engineering",
      "phone": "+91-4285-222222",
      "email": "info@jkkn.edu.in",
      "website": "https://jkkn.edu.in",
      "is_active": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "total": 5,
    "page": 1,
    "limit": 10,
    "totalPages": 1,
    "returned": 5
  }
}
```

### List Departments

```http
GET /api/api-management/organizations/departments
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by department_name, department_code |
| institution_id | string | No | Filter by institution UUID |
| degree_id | string | No | Filter by degree UUID |
| isActive | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "dept-uuid",
      "department_name": "Computer Science and Engineering",
      "department_code": "CSE",
      "institution_id": "inst-uuid",
      "degree_id": "degree-uuid",
      "is_active": true,
      "institution": {
        "id": "inst-uuid",
        "name": "JKKN College of Engineering & Technology",
        "counselling_code": "2711"
      },
      "degree": {
        "id": "degree-uuid",
        "degree_id": "BE",
        "degree_name": "Bachelor of Engineering"
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": {
    "total": 20,
    "page": 1,
    "limit": 10,
    "totalPages": 2,
    "returned": 10
  }
}
```

### List Programs

```http
GET /api/api-management/organizations/programs
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by program_name, program_id |
| institution_id | string | No | Filter by institution UUID |
| degree_id | string | No | Filter by degree UUID |
| department_id | string | No | Filter by department UUID |
| isActive | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "prog-uuid",
      "program_id": "BECS",
      "program_name": "B.E Computer Science",
      "institution_id": "inst-uuid",
      "department_id": "dept-uuid",
      "degree_id": "degree-uuid",
      "is_active": true,
      "institution": { /* ... */ },
      "department": { /* ... */ },
      "degree": { /* ... */ },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": { /* ... */ }
}
```

### List Degrees

```http
GET /api/api-management/organizations/degrees
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by degree_name, degree_id |
| institution_id | string | No | Filter by institution UUID |
| degree_type | string | No | Filter by degree type (e.g., "UG", "PG") |
| isActive | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "degree-uuid",
      "degree_id": "BE",
      "degree_name": "Bachelor of Engineering",
      "degree_type": "UG",
      "institution_id": "inst-uuid",
      "is_active": true,
      "institution": { /* ... */ },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": { /* ... */ }
}
```

### List Courses

```http
GET /api/api-management/organizations/courses
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by course_name, course_code |
| institution_id | string | No | Filter by institution UUID |
| degree_id | string | No | Filter by degree UUID |
| department_id | string | No | Filter by department UUID |
| program_id | string | No | Filter by program UUID |
| isActive | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "course-uuid",
      "course_code": "CS101",
      "course_name": "Introduction to Programming",
      "institution_id": "inst-uuid",
      "degree_id": "degree-uuid",
      "department_id": "dept-uuid",
      "program_id": "prog-uuid",
      "is_active": true,
      "institution": { /* ... */ },
      "department": { /* ... */ },
      "program": { /* ... */ },
      "degree": { /* ... */ },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": { /* ... */ }
}
```

### List Semesters

```http
GET /api/api-management/organizations/semesters
```

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | number | No | Page number (default: 1) |
| limit | number | No | Items per page (default: 10) |
| search | string | No | Search by semester_name, semester_code |
| institution_id | string | No | Filter by institution UUID |
| degree_id | string | No | Filter by degree UUID |
| department_id | string | No | Filter by department UUID |
| program_id | string | No | Filter by program UUID |
| course_id | string | No | Filter by course UUID |
| semester_type | string | No | Filter by type (e.g., "odd", "even") |
| is_active | boolean | No | Filter by active status |

**Response:**

```json
{
  "data": [
    {
      "id": "sem-uuid",
      "semester_code": "SEM1",
      "semester_name": "Semester 1",
      "semester_type": "odd",
      "institution_id": "inst-uuid",
      "degree_id": "degree-uuid",
      "department_id": "dept-uuid",
      "program_id": "prog-uuid",
      "course_id": "course-uuid",
      "is_active": true,
      "institution": { /* ... */ },
      "degree": { /* ... */ },
      "department": { /* ... */ },
      "program": { /* ... */ },
      "course": { /* ... */ },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "metadata": { /* ... */ }
}
```

---

## Error Responses

### 401 Unauthorized

```json
{
  "error": "API key is required in Authorization header"
}
```

```json
{
  "error": "Invalid API key"
}
```

```json
{
  "error": "API key has expired"
}
```

### 403 Forbidden

```json
{
  "error": "API key does not have read permission"
}
```

### 404 Not Found

```json
{
  "error": "Student not found"
}
```

```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error"
}
```

---

## Rate Limiting

Currently, there are no explicit rate limits. However, implement client-side throttling and caching to be a good API citizen.

**Best Practices:**
- Cache responses appropriately (5-10 minutes for relatively static data)
- Use debouncing for search inputs (500ms recommended)
- Implement request deduplication
- Use pagination effectively
- Fetch only needed data

---

## Pagination Best Practices

1. **Default Pagination:** Use `page=1&limit=10` as default
2. **Large Datasets:** Increase limit up to 100 for better performance
3. **Small Datasets:** Use `?all=true` for staff endpoint to fetch all at once
4. **Infinite Scroll:** Increment page number, check `totalPages` to know when to stop
5. **Total Count:** Use `metadata.total` to display total records

---

## Filtering Best Practices

1. **Hierarchical Filtering:** Filter by institution first, then department, then program
2. **Multiple Filters:** Combine filters with `&` (e.g., `?institution_id=x&department_id=y`)
3. **Search:** Use search for user input, filters for UI selections
4. **Active Status:** Always filter by `is_active=true` for production data

---

## CORS

The API supports CORS with the following headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept
```

All endpoints support OPTIONS preflight requests.

---

## Versioning

Current API version: **v1** (implicit, no version prefix)

Future versions will use URL prefixing (e.g., `/api/v2/...`).

---

## Change Log

### 2025-01-31
- Initial API documentation
- 16+ endpoints available
- Students, Staff, and Organization modules complete
- Pagination and filtering support
- TypeScript type definitions

---

**Last Updated:** 2025-01-31
