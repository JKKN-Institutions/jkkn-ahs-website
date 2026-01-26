# API Integration Assets

This directory contains ready-to-use templates and examples for integrating with MyJKKN API.

## Contents

### 1. react-nextjs-client/
Complete Next.js/React API client with TypeScript support.

**Files:**
- `client.ts` - Main API client
- `types.ts` - TypeScript type definitions
- `hooks.ts` - React Query hooks
- `example-usage.tsx` - Complete usage examples

**Usage:**
```bash
# Copy all files to your project
cp -r assets/react-nextjs-client/* your-project/lib/api/

# Or use the generator script
python scripts/generate_api_client.py --framework nextjs --output ./lib/api
```

### 2. vanilla-js-client/
Pure JavaScript client without framework dependencies.

**Files:**
- `client.js` - Main API client
- `example.html` - Browser usage example
- `example-node.js` - Node.js usage example

**Usage:**
```bash
# For browser
<script src="client.js"></script>

# For Node.js
const MyJKKNClient = require('./client.js');
```

### 3. typescript-types/
Complete TypeScript type definitions for all API entities.

**Files:**
- `api.ts` - Core API types
- `student.ts` - Student types
- `staff.ts` - Staff types
- `organization.ts` - Organization types
- `utils.ts` - Utility types and functions

**Usage:**
```bash
# Copy types to your project
cp assets/typescript-types/* your-project/types/

# Import in your code
import type { Student, ApiResponse } from '@/types/api';
```

### 4. examples/
Working examples for common integration scenarios.

**Files:**
- `data-table-example.tsx` - Paginated data table
- `dropdown-example.tsx` - Cascading dropdowns
- `search-example.tsx` - Search with debouncing
- `infinite-scroll-example.tsx` - Infinite scroll list

**Usage:**
```bash
# Copy example and adapt to your needs
cp assets/examples/data-table-example.tsx your-project/components/
```

## Quick Start

### Option 1: Use Generator Script (Recommended)

```bash
# Generate Next.js client
python scripts/generate_api_client.py --framework nextjs --output ./lib/api

# Generate Vanilla JS client
python scripts/generate_api_client.py --framework vanilla --output ./src/api

# Generate Express.js client
python scripts/generate_api_client.py --framework express --output ./services
```

### Option 2: Copy Templates Directly

```bash
# Copy React/Next.js template
cp -r assets/react-nextjs-client/* your-project/lib/api/

# Copy TypeScript types
cp assets/typescript-types/* your-project/types/

# Copy example components
cp assets/examples/* your-project/components/examples/
```

## Environment Setup

After copying the client, set up environment variables:

```env
# .env.local (Next.js)
NEXT_PUBLIC_MYJKKN_API_URL=https://jkkn.ai/api
MYJKKN_API_KEY=jk_xxxxx_xxxxx

# .env (Node.js)
MYJKKN_API_URL=https://jkkn.ai/api
MYJKKN_API_KEY=jk_xxxxx_xxxxx
```

**Important:** Never commit API keys to version control!

```bash
# Add to .gitignore
echo ".env.local" >> .gitignore
echo ".env" >> .gitignore
```

## Integration Examples

### React/Next.js

```typescript
import { apiClient } from '@/lib/api/client';
import { useStudents } from '@/lib/api/hooks';

// Using hooks (recommended)
function StudentsPage() {
  const { data, isLoading, error } = useStudents({ page: 1, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.data.map(student => (
        <div key={student.id}>{student.first_name}</div>
      ))}
    </div>
  );
}

// Using client directly
async function fetchStudents() {
  const response = await apiClient.students.list({ page: 1 });
  return response.data;
}
```

### Vanilla JavaScript (Browser)

```html
<!DOCTYPE html>
<html>
<head>
  <title>MyJKKN API Example</title>
  <script src="client.js"></script>
</head>
<body>
  <div id="students"></div>

  <script>
    const client = new MyJKKNClient('jk_xxxxx_xxxxx');

    client.fetchStudents({ page: 1, limit: 10 })
      .then(response => {
        const students = response.data;
        const html = students.map(s =>
          `<div>${s.first_name} ${s.last_name}</div>`
        ).join('');
        document.getElementById('students').innerHTML = html;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  </script>
</body>
</html>
```

### Node.js (Express)

```javascript
const MyJKKNApiClient = require('./myjkkn-client');

const apiClient = new MyJKKNApiClient(process.env.MYJKKN_API_KEY);

app.get('/api/students', async (req, res) => {
  try {
    const students = await apiClient.getStudents({
      page: req.query.page || 1,
      limit: req.query.limit || 10
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Testing

Test your API key before integration:

```bash
# Test default endpoint
python scripts/test_endpoint.py --key jk_xxxxx

# Test specific endpoint with parameters
python scripts/test_endpoint.py --endpoint staff --key jk_xxxxx --page 1 --limit 5

# Test with filters
python scripts/test_endpoint.py --endpoint departments --key jk_xxxxx --institution-id abc123
```

## Documentation

For complete documentation, see:

- **API Endpoints**: `references/api_endpoints.md`
- **Authentication**: `references/authentication_guide.md`
- **Integration Patterns**: `references/integration_patterns.md`
- **Data Models**: `references/data_models.md`

## Support

If you encounter issues:

1. Check API key is valid and active
2. Verify environment variables are set correctly
3. Test endpoint with test script
4. Review error responses and status codes
5. Refer to troubleshooting section in authentication guide

## License

These templates are provided as-is for integration with MyJKKN API.
