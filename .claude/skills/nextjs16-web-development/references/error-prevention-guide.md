# Next.js 16 Error Prevention Guide

**CRITICAL**: This guide addresses the most common errors in Next.js 16 applications. Read this FIRST before implementing any features to avoid repetitive errors.

---

## 🚨 THE THREE CRITICAL ERRORS (And How to Prevent Them)

These errors occur repeatedly because developers don't understand Next.js 16's fundamental architecture changes. Each section shows:
- ❌ **WRONG** - What causes the error
- ✅ **CORRECT** - How to fix it
- 📖 **WHY** - Understanding the root cause

---

## Error 1: Uncached Data Accessed Outside of <Suspense>

### Error Message
```
Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience.
```

### 📖 Why This Happens

Next.js 16 uses **Partial Prerendering (PPR)** by default when `cacheComponents: true` is enabled. During build time, Next.js tries to prerender your page into a static HTML shell.

When it encounters async operations (like network requests or database queries) that:
1. Are NOT wrapped in `<Suspense>`
2. Are NOT cached with `'use cache'`

Next.js **cannot complete prerendering** and shows this error. This blocks the entire page from rendering, defeating the purpose of PPR.

**Official Documentation**: https://nextjs.org/docs/app/getting-started/cache-components#defer-rendering-to-request-time

### ❌ WRONG - Blocking Pattern

```tsx
// ❌ This WILL cause the error
export default async function Page() {
  // Network request without Suspense or cache
  const data = await fetch('https://api.example.com/data')
  const users = await data.json()

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  )
}
```

```tsx
// ❌ This WILL cause the error
async function UserList() {
  // Database query without Suspense or cache
  const users = await db.query('SELECT * FROM users')
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

export default function Page() {
  return <UserList /> // No Suspense boundary!
}
```

```tsx
// ❌ This WILL cause the error
export default async function Page() {
  // Async file system operation without Suspense or cache
  const file = await fs.readFile('./data.json', 'utf-8')
  const data = JSON.parse(file)

  return <div>{data.title}</div>
}
```

### ✅ CORRECT - Solution 1: Use Suspense Boundaries

When you need **fresh data on every request** (real-time feeds, user-specific data that changes frequently):

```tsx
// ✅ CORRECT: Wrap async component in Suspense
import { Suspense } from 'react'

async function UserList() {
  // This is fine now because it's wrapped in Suspense
  const users = await db.query('SELECT * FROM users')
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

export default function Page() {
  return (
    <>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList />
      </Suspense>
    </>
  )
}
```

```tsx
// ✅ CORRECT: Multiple Suspense boundaries for parallel streaming
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <>
      {/* Static content - instant */}
      <h1>Dashboard</h1>

      {/* Each section streams independently */}
      <Suspense fallback={<MetricsSkeleton />}>
        <Metrics />
      </Suspense>

      <Suspense fallback={<ChartsSkeleton />}>
        <Charts />
      </Suspense>

      <Suspense fallback={<ActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </>
  )
}
```

### ✅ CORRECT - Solution 2: Use 'use cache' Directive

When data **doesn't change frequently** and can be cached:

```tsx
// ✅ CORRECT: Cache the data
import { cacheLife, cacheTag } from 'next/cache'

async function getProducts() {
  'use cache'
  cacheLife('hours')
  cacheTag('products')

  const response = await fetch('https://api.example.com/products')
  return response.json()
}

export default async function ProductsPage() {
  // No Suspense needed - data is cached and included in static shell
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
```

```tsx
// ✅ CORRECT: Component-level caching
export default async function BlogPage() {
  'use cache'
  cacheLife('days')
  cacheTag('blog-posts')

  const posts = await db.query('SELECT * FROM posts')

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => <BlogPost key={post.id} post={post} />)}
    </div>
  )
}
```

### 🎯 Decision Tree

```
Need fresh data on every request?
├─ YES → Use Suspense boundary
│  └─ Example: Real-time feeds, user notifications, live stock prices
│
└─ NO → Data can be cached?
   ├─ YES → Use 'use cache' with appropriate cacheLife
   │  └─ Example: Blog posts, product catalogs, static reports
   │
   └─ NO → Re-evaluate if you really need fresh data every time
```

---

## Error 2: Route Used Dynamic APIs Inside "use cache"

### Error Message
```
Route used `cookies()` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use `cookies()` outside of the cached function and pass the required dynamic data in as an argument.
```

### 📖 Why This Happens

Cache Components are **prerendered at build time** or **cached at runtime**. Dynamic APIs like `cookies()`, `headers()`, and `searchParams` require an **incoming HTTP request** to work.

When you try to use these APIs inside a `'use cache'` scope:
- **At build time**: No request exists → timeout after 50 seconds
- **At runtime**: Cached result can't include request-specific data → architectural violation

**Official Documentation**: https://nextjs.org/docs/app/api-reference/directives/use-cache#constraints

### ❌ WRONG - Accessing Dynamic APIs in Cache

```tsx
// ❌ This WILL cause the error
import { cookies } from 'next/headers'

async function getUserDashboard() {
  'use cache'
  cacheLife('hours')

  // ERROR: Can't access cookies inside cached scope
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  return await fetchUserData(userId)
}
```

```tsx
// ❌ This WILL cause the error
import { headers } from 'next/headers'

export default async function Page() {
  'use cache'

  // ERROR: Can't access headers inside cached scope
  const headerStore = await headers()
  const userAgent = headerStore.get('user-agent')

  return <div>User Agent: {userAgent}</div>
}
```

```tsx
// ❌ This WILL cause the error
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  'use cache'

  // ERROR: Can't access searchParams inside cached scope
  const { q } = await searchParams
  const results = await searchProducts(q)

  return <SearchResults results={results} />
}
```

### ✅ CORRECT - Extract Values, Then Cache

**The Pattern**: Read dynamic APIs **outside** the cached scope, then pass values as **arguments** to cached functions.

```tsx
// ✅ CORRECT: Read cookies outside, pass value to cached function
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}

// Uncached wrapper - reads dynamic data
async function DashboardContent() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) return <div>Please log in</div>

  // Pass userId to cached function
  return <CachedDashboard userId={userId} />
}

// Cached component - receives data as props
async function CachedDashboard({ userId }: { userId: string }) {
  'use cache'
  cacheLife('minutes')
  cacheTag(`user-${userId}`)

  // userId is now part of the cache key
  const data = await fetchUserData(userId)
  return <div>{data.name}</div>
}
```

```tsx
// ✅ CORRECT: Read searchParams outside, pass to cached function
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams

  if (!q) return <div>Enter a search query</div>

  // Pass query to cached function
  return (
    <Suspense fallback={<div>Searching...</div>}>
      <CachedSearchResults query={q} />
    </Suspense>
  )
}

async function CachedSearchResults({ query }: { query: string }) {
  'use cache'
  cacheLife('minutes')
  cacheTag('search', `search-${query}`)

  // Query becomes part of cache key
  const results = await searchProducts(query)
  return <SearchResults results={results} />
}
```

```tsx
// ✅ CORRECT: Read headers outside, pass to cached function
import { headers } from 'next/headers'

export default async function Page() {
  const headerStore = await headers()
  const userAgent = headerStore.get('user-agent') || 'unknown'

  return <CachedContent userAgent={userAgent} />
}

async function CachedContent({ userAgent }: { userAgent: string }) {
  'use cache'
  cacheLife('hours')

  // userAgent is part of cache key
  const optimizedContent = await getOptimizedContent(userAgent)
  return <div>{optimizedContent}</div>
}
```

### 🎯 The Golden Rule

```
NEVER call dynamic APIs inside 'use cache' scope
ALWAYS extract values outside, pass as arguments
```

**Why it works**: When you pass values as arguments, they become part of the **cache key**. Different users get different cache entries automatically.

---

## Error 3: searchParams/params is a Promise (Must Await)

### Error Message
```
Route used `searchParams.category`. `searchParams` is a Promise and must be unwrapped with `await` or `React.use()` before accessing its properties.
```

### 📖 Why This Happens

Starting with **Next.js 15** and enforced in **Next.js 16**, these props are now **async Promises**:
- `params` (in pages, layouts, routes)
- `searchParams` (in pages)

This change aligns with Next.js's async architecture and allows for better optimization.

**Official Documentation**: https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional

### ❌ WRONG - Synchronous Access

```tsx
// ❌ This WILL cause the error
export default function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  // ERROR: Trying to access property without awaiting
  const category = searchParams.category

  return <div>Category: {category}</div>
}
```

```tsx
// ❌ This WILL cause the error
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  // ERROR: Destructuring without awaiting
  const { id } = params

  return <div>ID: {id}</div>
}
```

```tsx
// ❌ This WILL cause the error
export default function Page({ searchParams }: { searchParams: Promise<{ sort?: string }> }) {
  // ERROR: Passing Promise directly to child
  return <ProductList sort={searchParams.sort} />
}
```

### ✅ CORRECT - Async/Await Pattern (Server Components)

```tsx
// ✅ CORRECT: Await searchParams in async Server Component
export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string; page?: string }> }) {
  const { category, page = '1' } = await searchParams

  return (
    <div>
      <h1>Category: {category || 'All'}</h1>
      <p>Page: {page}</p>
    </div>
  )
}
```

```tsx
// ✅ CORRECT: Await params in async Server Component
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await fetchProduct(id)

  return <ProductDetail product={product} />
}
```

```tsx
// ✅ CORRECT: Await both params and searchParams
export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ sort?: string; filter?: string }>
}) {
  const { category } = await params
  const { sort = 'asc', filter } = await searchParams

  const products = await fetchProducts({ category, sort, filter })

  return <ProductGrid products={products} />
}
```

### ✅ CORRECT - React.use() Pattern (Client Components)

```tsx
// ✅ CORRECT: Use React.use() in Client Components
'use client'
import { use } from 'react'

export default function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = use(searchParams)

  return (
    <div>
      <SearchInput defaultValue={q} />
    </div>
  )
}
```

```tsx
// ✅ CORRECT: Use React.use() for params in Client Components
'use client'
import { use } from 'react'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return <ClientProductView productId={id} />
}
```

### ✅ CORRECT - Type-Safe with PageProps Helper

```tsx
// ✅ CORRECT: Use PageProps helper for type safety
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const { tag, page = '1' } = await props.searchParams

  const post = await fetchBlogPost(slug)

  return (
    <article>
      <h1>{post.title}</h1>
      {tag && <p>Tag: {tag}</p>}
      <p>Page: {page}</p>
    </article>
  )
}
```

### 🎯 Quick Reference

```tsx
// Server Components (default)
export default async function Page({ params, searchParams }) {
  const p = await params
  const sp = await searchParams
  // ...
}

// Client Components
'use client'
import { use } from 'react'

export default function Page({ params, searchParams }) {
  const p = use(params)
  const sp = use(searchParams)
  // ...
}
```

---

## 🔄 Complete Example: All Three Errors Fixed

### ❌ WRONG - Multiple Errors

```tsx
// ❌ This has ALL THREE ERRORS
import { cookies } from 'next/headers'

export default function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  'use cache' // Will cache entire page

  // ERROR 1: No Suspense boundary for async data
  const products = await fetch('https://api.example.com/products')

  // ERROR 2: Accessing cookies() inside cache
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  // ERROR 3: Accessing searchParams without await
  const category = searchParams.category

  return <div>Products</div>
}
```

### ✅ CORRECT - All Errors Fixed

```tsx
// ✅ CORRECT: All three errors resolved
import { cookies } from 'next/headers'
import { Suspense } from 'react'

// Page component - no cache here
export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  // FIX 3: Await searchParams
  const { category } = await searchParams

  // FIX 2: Read cookies outside cache scope
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  return (
    <div>
      <h1>Products</h1>

      {/* FIX 1: Wrap async content in Suspense */}
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductList category={category} userId={userId} />
      </Suspense>
    </div>
  )
}

// Cached component - receives data as props
async function ProductList({ category, userId }: { category?: string; userId?: string }) {
  'use cache'
  cacheLife('hours')
  cacheTag('products', category ? `category-${category}` : 'all')

  // Cache key includes both category and userId
  const products = await fetch(
    `https://api.example.com/products?category=${category || 'all'}&userId=${userId || 'guest'}`
  )
  const data = await products.json()

  return (
    <div>
      {data.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
```

---

## 📋 Pre-Flight Checklist

Before writing any Next.js 16 component, ask yourself:

### 1. Does it fetch data?
- [ ] YES → Wrapped in `<Suspense>` OR uses `'use cache'`
- [ ] NO → Safe to proceed

### 2. Does it use cookies(), headers(), or searchParams?
- [ ] Inside `'use cache'` scope → ❌ MOVE OUTSIDE, pass as argument
- [ ] Outside cache scope → ✅ Correct

### 3. Do I access params or searchParams?
- [ ] Server Component → Use `await`
- [ ] Client Component → Use `React.use()`
- [ ] Direct property access → ❌ Must unwrap Promise first

---

## 🚀 Quick Fixes for Common Scenarios

### Scenario 1: Product Listing Page

```tsx
// ✅ CORRECT
import { Suspense } from 'react'

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams // Fix Error 3

  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}> {/* Fix Error 1 */}
        <ProductList category={category} />
      </Suspense>
    </div>
  )
}

async function ProductList({ category }: { category?: string }) {
  'use cache' // Can cache because no dynamic APIs
  cacheLife('hours')
  cacheTag('products')

  const products = await fetchProducts(category)
  return <div>{/* render products */}</div>
}
```

### Scenario 2: User Dashboard

```tsx
// ✅ CORRECT
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}> {/* Fix Error 1 */}
      <Dashboard />
    </Suspense>
  )
}

async function Dashboard() {
  const cookieStore = await cookies() // Read outside cache (Fix Error 2)
  const userId = cookieStore.get('userId')?.value

  if (!userId) return <div>Please log in</div>

  return <CachedDashboard userId={userId} />
}

async function CachedDashboard({ userId }: { userId: string }) {
  'use cache'
  cacheLife('minutes')
  cacheTag(`user-${userId}`)

  const data = await fetchUserData(userId) // userId in cache key
  return <div>{data.name}</div>
}
```

### Scenario 3: Search Results

```tsx
// ✅ CORRECT
import { Suspense } from 'react'

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams // Fix Error 3

  if (!q) return <div>Enter a search query</div>

  return (
    <Suspense fallback={<div>Searching...</div>}> {/* Fix Error 1 */}
      <SearchResults query={q} />
    </Suspense>
  )
}

async function SearchResults({ query }: { query: string }) {
  'use cache'
  cacheLife('minutes')
  cacheTag('search', `q-${query}`)

  const results = await search(query) // query in cache key
  return <div>{/* render results */}</div>
}
```

---

## 🎓 Summary

### The Three Rules

1. **Async Data Rule**: ALL async data fetching must be either:
   - Wrapped in `<Suspense>` (for dynamic data)
   - Marked with `'use cache'` (for cacheable data)

2. **Dynamic APIs Rule**: NEVER use `cookies()`, `headers()`, or `searchParams` inside `'use cache'`:
   - Read them OUTSIDE cached scope
   - Pass values as ARGUMENTS to cached functions

3. **Async Props Rule**: ALWAYS unwrap params/searchParams Promises:
   - Server Components: `const { id } = await params`
   - Client Components: `const { id } = use(params)`

### Remember

These errors are **architectural**, not bugs. They exist to:
- Ensure optimal performance (PPR)
- Prevent cache poisoning
- Enable proper request handling

Follow these patterns, and you'll never see these errors again!
