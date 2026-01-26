# Mobile Conversion Patterns

## Complete Page Conversion Guide

### Step-by-Step Process

1. **Identify page type**: List page, Form page, Detail page, Dashboard
2. **Apply appropriate pattern** from below
3. **Add mobile navigation** if missing
4. **Test at 320px, 375px, 428px widths**

---

## List/Table Pages

### Before
```tsx
<div className="p-8">
  <div className="flex justify-between mb-6">
    <h1 className="text-3xl">Customers</h1>
    <button>Add Customer</button>
  </div>
  <table className="w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {customers.map(c => (
        <tr key={c.id}>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.phone}</td>
          <td><Badge>{c.status}</Badge></td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### After
```tsx
<div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
  {/* Header */}
  <div className="sticky top-0 z-10 bg-white border-b px-4 py-3 sm:px-6 sm:py-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold truncate">
        Customers
      </h1>
      <button className="
        flex items-center gap-2
        bg-primary text-white
        px-3 py-2 sm:px-4 sm:py-2
        rounded-lg text-sm sm:text-base
        min-h-[44px]
      ">
        <PlusIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Add Customer</span>
        <span className="sm:hidden">Add</span>
      </button>
    </div>

    {/* Mobile Search */}
    <div className="mt-3 md:hidden">
      <input
        type="search"
        placeholder="Search customers..."
        className="w-full px-4 py-2 border rounded-lg"
      />
    </div>
  </div>

  {/* Content */}
  <div className="px-4 py-4 sm:px-6 sm:py-6">
    {/* Desktop Table */}
    <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Phone</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {customers.map(c => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{c.name}</td>
              <td className="px-4 py-3">{c.email}</td>
              <td className="px-4 py-3">{c.phone}</td>
              <td className="px-4 py-3"><Badge>{c.status}</Badge></td>
              <td className="px-4 py-3 text-right">
                <button className="p-2 hover:bg-gray-100 rounded">Edit</button>
                <button className="p-2 hover:bg-gray-100 rounded text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-3">
      {customers.map(c => (
        <div
          key={c.id}
          className="bg-white rounded-lg p-4 shadow-sm border"
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <Badge className="mt-1">{c.status}</Badge>
            </div>
            <button className="p-2 -mr-2 min-w-[44px] min-h-[44px]">
              <MoreVerticalIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-1 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <MailIcon className="w-4 h-4" />
              {c.email}
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              {c.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

---

## Form Pages

### Before
```tsx
<div className="max-w-2xl mx-auto p-8">
  <h1 className="text-3xl mb-8">Add Customer</h1>
  <form className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <label>First Name</label>
        <input className="w-full border p-2" />
      </div>
      <div>
        <label>Last Name</label>
        <input className="w-full border p-2" />
      </div>
    </div>
    <div>
      <label>Email</label>
      <input type="email" className="w-full border p-2" />
    </div>
    <div className="flex gap-4 justify-end">
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </div>
  </form>
</div>
```

### After
```tsx
<div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
  {/* Sticky Header */}
  <header className="sticky top-0 z-10 bg-white border-b">
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 min-w-[44px] min-h-[44px] md:hidden"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
          Add Customer
        </h1>
      </div>

      {/* Desktop buttons in header */}
      <div className="hidden md:flex gap-3">
        <button
          type="button"
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="customer-form"
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Save Customer
        </button>
      </div>
    </div>
  </header>

  {/* Form Content */}
  <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      <form id="customer-form" className="space-y-4 sm:space-y-6">
        {/* Two column on desktop, single on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium mb-1.5">
              First Name
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-base"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Last Name
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-base"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-lg text-base"
            placeholder="customer@example.com"
          />
        </div>
      </form>
    </div>
  </div>

  {/* Mobile Fixed Bottom Actions */}
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 safe-area-pb">
    <div className="flex gap-3">
      <button
        type="button"
        className="flex-1 px-4 py-3 border rounded-lg font-medium"
      >
        Cancel
      </button>
      <button
        type="submit"
        form="customer-form"
        className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium"
      >
        Save
      </button>
    </div>
  </div>
</div>
```

---

## Dashboard Pages

### Before
```tsx
<div className="p-8">
  <h1 className="text-3xl mb-8">Dashboard</h1>
  <div className="grid grid-cols-4 gap-6 mb-8">
    <StatCard title="Revenue" value="$12,345" />
    <StatCard title="Orders" value="156" />
    <StatCard title="Customers" value="89" />
    <StatCard title="Products" value="45" />
  </div>
  <div className="grid grid-cols-2 gap-6">
    <ChartCard />
    <RecentOrdersCard />
  </div>
</div>
```

### After
```tsx
<div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
  {/* Header */}
  <header className="sticky top-0 z-10 bg-white border-b px-4 py-3 sm:px-6">
    <div className="flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl font-semibold">Dashboard</h1>
      <button className="p-2 min-w-[44px] min-h-[44px]">
        <BellIcon className="w-5 h-5" />
      </button>
    </div>
  </header>

  {/* Content */}
  <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
    {/* Stats Grid - 2 cols mobile, 4 cols desktop */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6">
      <StatCard
        title="Revenue"
        value="$12,345"
        className="p-4 sm:p-6"
      />
      <StatCard
        title="Orders"
        value="156"
        className="p-4 sm:p-6"
      />
      <StatCard
        title="Customers"
        value="89"
        className="p-4 sm:p-6"
      />
      <StatCard
        title="Products"
        value="45"
        className="p-4 sm:p-6"
      />
    </div>

    {/* Charts - Stack on mobile, side-by-side on desktop */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <ChartCard className="p-4 sm:p-6" />
      <RecentOrdersCard className="p-4 sm:p-6" />
    </div>
  </div>
</div>
```

---

## Detail/View Pages

### Before
```tsx
<div className="max-w-4xl mx-auto p-8">
  <div className="flex justify-between mb-8">
    <h1 className="text-3xl">Customer Details</h1>
    <div className="flex gap-4">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h2>Contact Info</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
    </div>
    <div>
      <h2>Orders</h2>
      {/* Orders list */}
    </div>
  </div>
</div>
```

### After
```tsx
<div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
  {/* Header */}
  <header className="sticky top-0 z-10 bg-white border-b">
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 min-w-[44px] min-h-[44px] md:hidden"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <div className="truncate">
          <h1 className="text-lg sm:text-xl font-semibold truncate">
            {customer.name}
          </h1>
          <p className="text-sm text-gray-500 md:hidden">Customer</p>
        </div>
      </div>

      {/* Desktop actions */}
      <div className="hidden md:flex gap-3">
        <button className="px-4 py-2 border rounded-lg">Edit</button>
        <button className="px-4 py-2 border rounded-lg text-red-600">Delete</button>
      </div>

      {/* Mobile more button */}
      <button className="md:hidden p-2 min-w-[44px] min-h-[44px]">
        <MoreVerticalIcon className="w-5 h-5" />
      </button>
    </div>
  </header>

  {/* Content */}
  <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      {/* Stack on mobile, grid on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Contact Card */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm text-gray-500">Name</dt>
              <dd className="font-medium">{customer.name}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Email</dt>
              <dd className="font-medium break-all">{customer.email}</dd>
            </div>
          </dl>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          {/* Orders list */}
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Bottom Actions */}
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 safe-area-pb">
    <div className="flex gap-3">
      <button className="flex-1 py-3 border rounded-lg font-medium">
        Edit
      </button>
      <button className="flex-1 py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium">
        Delete
      </button>
    </div>
  </div>
</div>
```

---

## Quick Reference - Class Mappings

| Desktop | Mobile-First |
|---------|--------------|
| `p-8` | `p-4 sm:p-6 lg:p-8` |
| `grid-cols-4` | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` |
| `grid-cols-2` | `grid-cols-1 lg:grid-cols-2` |
| `gap-6` | `gap-3 sm:gap-4 lg:gap-6` |
| `text-3xl` | `text-xl sm:text-2xl lg:text-3xl` |
| `flex gap-4` | `flex flex-col sm:flex-row gap-3 sm:gap-4` |
| `w-64` | `w-full sm:w-64` |
| `max-w-2xl` | `w-full max-w-2xl` |

---

## JKKN Project-Specific Components

The JKKN Institution Website project includes pre-built responsive components that follow all patterns above.

### Available Components

| Component | Import | Description |
|-----------|--------|-------------|
| `ResponsivePageHeader` | `@/components/ui/responsive-page-header` | Standardized page header with icon, title, badge, actions |
| `ResponsiveDataList` | `@/components/ui/responsive-data-list` | Table on desktop, cards on mobile |
| `MobileActionBar` | `@/components/ui/mobile-action-bar` | Fixed bottom action bar for mobile |
| `ResponsiveCard` | `@/components/ui/responsive-card` | Card with responsive padding and variants |
| `ResponsiveForm` | `@/components/ui/responsive-form` | Form with touch-friendly inputs |
| `ResponsiveGrid` | `@/components/ui/responsive-grid` | Grid with automatic responsive columns |

### Usage Example

```tsx
// Before: Manual responsive styling
<div className="glass-card rounded-2xl p-6 relative overflow-hidden">
  <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10">
        <UsersIcon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Users</h1>
        <p className="text-muted-foreground mt-1">Manage users</p>
      </div>
    </div>
    <Button asChild><Link href="/admin/users/new">Add User</Link></Button>
  </div>
</div>

// After: Using ResponsivePageHeader component
<ResponsivePageHeader
  icon={<UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />}
  title="Users"
  description="Manage users"
  badge="Module 1"
  actions={
    <Button asChild className="w-full sm:w-auto min-h-[44px]">
      <Link href="/admin/users/new">Add User</Link>
    </Button>
  }
/>
```

### CSS Utility Classes

The project includes these custom utility classes in `globals.css`:

**Touch Targets:**
- `.touch-target` - 44x44px minimum
- `.touch-target-sm` - 36x36px minimum
- `.touch-target-lg` - 48x48px minimum

**Safe Areas:**
- `.safe-area-pb` - Bottom safe area padding
- `.safe-area-pt` - Top safe area padding

**Layout Helpers:**
- `.stack-mobile` - Stack on mobile, row on desktop
- `.w-mobile-full` - Full width mobile, auto desktop
- `.p-mobile` - Responsive padding
- `.gap-mobile` - Responsive gap
- `.rounded-mobile` - Responsive border radius

**Visibility:**
- `.mobile-only` - Show only on mobile
- `.mobile-hidden` - Hide on mobile
- `.tablet-only` / `.tablet-hidden`
- `.desktop-only` / `.desktop-hidden`

**Navigation:**
- `.pb-nav` - Padding for bottom nav (pb-24 lg:pb-6)
- `.pt-header` - Padding for fixed header
