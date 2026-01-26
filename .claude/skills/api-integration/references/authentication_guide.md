# Authentication Guide

Complete guide for API key generation, authentication, and authorization in MyJKKN API.

## Overview

MyJKKN uses API key-based authentication with Bearer tokens. API keys are generated through the parent application and used by child applications to access data securely.

---

## API Key Generation

### Step 1: Access API Management

1. Log in to MyJKKN parent application
2. Navigate to **System → API Management**
3. Click **"Generate New API Key"** button

### Step 2: Configure API Key

**Required Fields:**
- **Name**: Descriptive name for the key (e.g., "Mobile App Production", "Web Dashboard Dev")

**Optional Fields:**
- **Expiration Date**: Set expiry date for enhanced security
  - Recommended: 90 days for production keys
  - Test keys: 24 hours
  - No expiration: Use cautiously, only for trusted internal apps

**Permissions** (currently read-only):
- **Read**: ✅ Enabled (allows GET requests)
- **Write**: ❌ Not yet implemented

### Step 3: Save API Key

**IMPORTANT:** The API key is shown **only once** after generation.

```
jk_a7f3d8c2b1e9f4a6_1706745600000
└─┬─┘ └────────┬───────────┘ └─────┬─────┘
  │            │                     │
Prefix    Random String          Timestamp
```

**What Happens:**
1. Plain text key displayed in modal
2. SHA-256 hash stored in database
3. Modal can't be reopened - key is gone forever
4. If lost, must generate new key

**Copy and Store:**
```bash
# Save to environment variables
MYJKKN_API_KEY=jk_a7f3d8c2b1e9f4a6_1706745600000

# Never commit to git!
# Add to .gitignore
echo ".env.local" >> .gitignore
```

### Step 4: Test API Key

Use the test endpoint script:

```bash
python scripts/test_endpoint.py --key jk_a7f3d8c2b1e9f4a6_1706745600000
```

Or manually test:

```bash
curl -H "Authorization: Bearer jk_a7f3d8c2b1e9f4a6_1706745600000" \
  https://jkkn.ai/api/api-management/students?limit=1
```

---

## Authentication Flow

### Client-Side Flow

```
┌─────────────┐
│ Child App   │
└──────┬──────┘
       │
       │ 1. Send Request with API Key
       ├──────────────────────────────────────┐
       │  GET /api/api-management/students    │
       │  Authorization: Bearer jk_xxxxx       │
       └──────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────┐
│ MyJKKN Parent API Server                     │
│                                              │
│ 2. Extract API Key from Authorization Header│
│                                              │
│ 3. Hash API Key (SHA-256)                   │
│                                              │
│ 4. Query Database for Matching Hash         │
│                                              │
│ 5. Validate:                                │
│    - Key exists?                            │
│    - Key is active?                         │
│    - Key not expired?                       │
│    - Has read permission?                   │
│                                              │
│ 6. If valid:                                │
│    - Update last_used_at timestamp          │
│    - Execute query                          │
│    - Return data                            │
│                                              │
│ 7. If invalid:                              │
│    - Return 401/403 error                   │
└──────────────────────────────────────────────┘
       │
       ▼
┌─────────────┐
│ Response    │
│ - 200 OK    │
│ - 401/403   │
└─────────────┘
```

### Server-Side Implementation

**Step 1: Extract API Key**

```typescript
// From Authorization header
const authHeader = request.headers.get('Authorization');

if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return Response.json(
    { error: 'API key is required in Authorization header' },
    { status: 401 }
  );
}

const apiKey = authHeader.substring(7); // Remove 'Bearer ' prefix
```

**Step 2: Hash API Key**

```typescript
import { createHash } from 'crypto';

const hashedKey = createHash('sha256')
  .update(apiKey)
  .digest('hex');
```

**Step 3: Verify Against Database**

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Service role bypasses RLS
);

const { data: keyData, error } = await supabase
  .from('api_keys')
  .select('*')
  .eq('key_value', hashedKey)
  .eq('is_active', true)
  .single();

if (error || !keyData) {
  return Response.json(
    { error: 'Invalid API key' },
    { status: 401 }
  );
}
```

**Step 4: Check Expiration**

```typescript
if (keyData.expires_at) {
  const expiryDate = new Date(keyData.expires_at);
  const now = new Date();

  if (expiryDate < now) {
    return Response.json(
      { error: 'API key has expired' },
      { status: 401 }
    );
  }
}
```

**Step 5: Check Permissions**

```typescript
if (!keyData.permissions?.read) {
  return Response.json(
    { error: 'API key does not have read permission' },
    { status: 403 }
  );
}
```

**Step 6: Update Last Used**

```typescript
// Update last_used_at timestamp (fire and forget)
supabase
  .from('api_keys')
  .update({ last_used_at: new Date().toISOString() })
  .eq('id', keyData.id)
  .then(); // Don't await to avoid blocking
```

**Step 7: Execute Request**

```typescript
// Request is authenticated, proceed with data fetching
const { data, error } = await supabase
  .from('students')
  .select('*')
  .limit(10);

return Response.json({
  data,
  metadata: { /* ... */ }
});
```

---

## Client-Side Implementation

### React/Next.js Example

**Set Up Environment Variables**

```env
# .env.local
NEXT_PUBLIC_MYJKKN_API_URL=https://jkkn.ai/api
MYJKKN_API_KEY=jk_a7f3d8c2b1e9f4a6_1706745600000
```

**Create API Client**

```typescript
// lib/api/client.ts
const API_URL = process.env.NEXT_PUBLIC_MYJKKN_API_URL;
const API_KEY = process.env.MYJKKN_API_KEY;

class ApiClient {
  private baseURL: string;
  private apiKey: string;

  constructor(baseURL: string, apiKey: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ApiError(error.error, response.status);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // Add POST, PUT, DELETE methods as needed
}

class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiClient = new ApiClient(API_URL!, API_KEY!);
export { ApiError };
```

**Use in Components**

```typescript
// app/students/page.tsx
import { apiClient, ApiError } from '@/lib/api/client';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await apiClient.get('/api-management/students?limit=10');
        setStudents(response.data);
      } catch (err) {
        if (err instanceof ApiError) {
          if (err.status === 401) {
            setError('Authentication failed. Please check your API key.');
          } else if (err.status === 403) {
            setError('Permission denied. Your API key lacks read access.');
          } else {
            setError(err.message);
          }
        }
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      {error && <Alert>{error}</Alert>}
      {/* Render students */}
    </div>
  );
}
```

### Vanilla JavaScript Example

```javascript
// api-client.js
class MyJKKNClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://jkkn.ai/api';
  }

  async fetchStudents(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${this.baseURL}/api-management/students${queryString ? '?' + queryString : ''}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async fetchStaff(params = {}) {
    // Similar implementation
  }

  // Add more methods as needed
}

// Usage
const client = new MyJKKNClient('jk_a7f3d8c2b1e9f4a6_1706745600000');

client.fetchStudents({ page: 1, limit: 10 })
  .then(response => {
    console.log('Students:', response.data);
    console.log('Total:', response.metadata.total);
  })
  .catch(error => {
    console.error('Failed to fetch students:', error);
  });
```

---

## Security Best Practices

### 1. Never Expose API Keys Client-Side

**❌ Bad - Client-side exposure:**

```typescript
// DON'T DO THIS!
const API_KEY = 'jk_a7f3d8c2b1e9f4a6_1706745600000'; // Hard-coded in client code

fetch('https://jkkn.ai/api/api-management/students', {
  headers: { 'Authorization': `Bearer ${API_KEY}` }
});
```

**✅ Good - Server-side proxy:**

```typescript
// API route: app/api/proxy/students/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.MYJKKN_API_KEY; // Server-side only

  const response = await fetch(
    'https://jkkn.ai/api/api-management/students',
    {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}

// Client calls your proxy instead
fetch('/api/proxy/students');
```

### 2. Use Environment Variables

```bash
# .env.local (never commit!)
MYJKKN_API_KEY=jk_xxxxx

# .gitignore
.env.local
.env.production
```

### 3. Rotate Keys Regularly

- Production keys: Every 90 days
- Development keys: Every 30 days
- Test keys: 24-hour expiration

**Rotation Process:**
1. Generate new API key
2. Update environment variables in deployment
3. Deploy with new key
4. Test thoroughly
5. Deactivate old key (don't delete yet)
6. Monitor for 24-48 hours
7. Delete old key if no issues

### 4. Use Separate Keys per Environment

```env
# Development
MYJKKN_API_KEY=jk_dev_xxxxx

# Staging
MYJKKN_API_KEY=jk_staging_xxxxx

# Production
MYJKKN_API_KEY=jk_prod_xxxxx
```

Benefits:
- Isolate access per environment
- Track usage separately
- Revoke without affecting other environments
- Different expiration policies

### 5. Monitor API Key Usage

Check `last_used_at` timestamp regularly:

```sql
-- In MyJKKN parent app
SELECT
  name,
  last_used_at,
  expires_at,
  is_active
FROM api_keys
WHERE is_active = true
ORDER BY last_used_at DESC;
```

**Set up alerts for:**
- Keys not used in 30+ days (might be abandoned)
- Keys used from unexpected IPs (if IP tracking added)
- Expired keys still being used (should return 401)

### 6. Handle Expired Keys Gracefully

```typescript
try {
  const response = await apiClient.fetchStudents();
} catch (error) {
  if (error instanceof ApiError && error.status === 401) {
    if (error.message.includes('expired')) {
      // Show renewal prompt to admin
      showKeyRenewalDialog();
    } else {
      // Invalid key - contact admin
      showInvalidKeyError();
    }
  }
}
```

---

## API Key Management

### Viewing API Keys

In MyJKKN parent application:

1. Navigate to **System → API Management**
2. View table of all API keys:
   - Name
   - Status (Active/Inactive)
   - Created date
   - Expiration date
   - Last used timestamp
   - Key value (hashed, first/last 4 chars shown)

### Activating/Deactivating Keys

Toggle the status switch:
- **Active (Green):** Key can authenticate requests
- **Inactive (Red):** Key rejected with 401 error

**Use Cases:**
- Temporarily disable key without deleting
- Investigate suspicious activity
- Graceful key rotation

### Deleting API Keys

**Warning:** Deletion is permanent and immediate.

1. Click trash icon next to key
2. Confirm deletion
3. Key immediately stops working
4. Child apps receive 401 errors

**Best Practice:** Deactivate first, monitor for 24-48 hours, then delete.

### Testing API Keys

Built-in test functionality:

1. Click "Test" button next to key
2. System makes test request to `/api/api-management/students?limit=1`
3. Shows success or error message
4. Updates `last_used_at` timestamp

---

## Troubleshooting

### Error: "API key is required in Authorization header"

**Cause:** Missing or malformed Authorization header

**Fix:**
```typescript
// Ensure header is present and formatted correctly
headers: {
  'Authorization': `Bearer ${apiKey}` // Note: 'Bearer ' with space
}
```

### Error: "Invalid API key"

**Causes:**
1. Typo in API key
2. Key deleted from MyJKKN
3. Wrong environment key

**Fix:**
1. Verify key matches exactly (copy-paste)
2. Check key exists in MyJKKN API Management
3. Verify environment variables loaded correctly

```typescript
console.log('Using API key:', process.env.MYJKKN_API_KEY?.substring(0, 10) + '...');
```

### Error: "API key has expired"

**Cause:** Key expiration date passed

**Fix:**
1. Generate new API key in MyJKKN
2. Update environment variable
3. Redeploy child application
4. Delete old key

### Error: "API key does not have read permission"

**Cause:** Key permissions don't include read access

**Fix:**
1. Check key permissions in MyJKKN API Management
2. Ensure "Read" permission is enabled
3. If disabled, create new key with proper permissions

### Authentication Works in Development but Not Production

**Common Issues:**

1. **Environment variables not set:**
```bash
# Check production environment variables
echo $MYJKKN_API_KEY

# Verify in deployment platform (Vercel, Netlify, etc.)
```

2. **Using development key in production:**
```env
# development.env
MYJKKN_API_KEY=jk_dev_xxxxx

# production.env
MYJKKN_API_KEY=jk_prod_xxxxx  # ← Must be different!
```

3. **CORS issues:**
```
Check browser console for CORS errors
MyJKKN API supports CORS with '*' origin currently
```

---

## Advanced Topics

### Implementing Token Refresh

While API keys don't expire automatically (unless expiration set), implement proactive renewal:

```typescript
class ApiClient {
  private apiKey: string;
  private keyExpiresAt: Date | null;

  constructor(apiKey: string, expiresAt?: string) {
    this.apiKey = apiKey;
    this.keyExpiresAt = expiresAt ? new Date(expiresAt) : null;
  }

  private isKeyExpiringSoon(): boolean {
    if (!this.keyExpiresAt) return false;

    const daysUntilExpiry = Math.ceil(
      (this.keyExpiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );

    return daysUntilExpiry <= 7; // Warn 7 days before
  }

  async request(endpoint: string) {
    if (this.isKeyExpiringSoon()) {
      console.warn('API key expiring soon! Generate new key.');
      // Trigger admin notification
    }

    // Proceed with request
  }
}
```

### Multi-Tenant API Keys

For applications serving multiple institutions:

```typescript
// Store API keys per institution
const apiKeys = {
  'inst-uuid-1': 'jk_key_1',
  'inst-uuid-2': 'jk_key_2',
};

function getApiKey(institutionId: string): string {
  return apiKeys[institutionId] || throw new Error('No API key for institution');
}

// Use appropriate key per request
const apiKey = getApiKey(currentInstitution);
const client = new ApiClient(apiKey);
```

### API Key Scoping (Future)

While not currently implemented, future versions may support scoped keys:

```typescript
// Future: Create key with specific scope
{
  "name": "Mobile App - Students Only",
  "permissions": {
    "read": ["students"],  // Only students endpoint
    "write": []
  }
}
```

---

## Summary

**API Key Generation:**
1. Navigate to System → API Management in MyJKKN
2. Generate key with descriptive name
3. Copy key immediately (shown once)
4. Store securely in environment variables

**Authentication:**
- Use Bearer token in Authorization header
- Server validates key, expiration, and permissions
- Returns 401/403 for invalid/unauthorized requests

**Security:**
- Never expose keys client-side
- Use environment variables
- Rotate keys regularly (90 days)
- Separate keys per environment
- Monitor usage via last_used_at

**Troubleshooting:**
- Verify Authorization header format
- Check key exists and is active
- Confirm expiration date
- Validate permissions
- Test with curl or test script

---

**Last Updated:** 2025-01-31
