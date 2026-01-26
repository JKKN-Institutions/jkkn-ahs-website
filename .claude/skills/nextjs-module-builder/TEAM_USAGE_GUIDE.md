# Team Usage Guide: nextjs-module-builder Skill

## 🎯 Quick Start for Team Members

This guide explains how your team can use the `nextjs-module-builder` skill to standardize Next.js 15 + Supabase development.

---

## 📦 Step 1: Get the Skill Package

### For Team Lead (One-time Setup)

**Option A: Manual Packaging (Easiest)**

1. Navigate to: `D:\JKKN\Claude-Code-plugins\skills\`
2. Right-click the `nextjs-module-builder` folder
3. Select **"Send to" → "Compressed (zipped) folder"**
4. Rename the ZIP file to: `nextjs-module-builder.skill`
5. Move it to a shared location (Google Drive, SharePoint, Teams, etc.)

**Option B: Using Python Script (Recommended)**

```bash
# Open Command Prompt or PowerShell
cd D:\JKKN\Claude-Code-plugins\skills\skill-creator\scripts

# Package the skill
python package_skill.py "D:\JKKN\Claude-Code-plugins\skills\nextjs-module-builder" "D:\JKKN\Claude-Code-plugins\dist"

# The packaged skill will be at:
# D:\JKKN\Claude-Code-plugins\dist\nextjs-module-builder.skill
```

---

## 👥 Step 2: Team Members Install the Skill

### Installation Instructions (for each team member)

1. **Download the Skill Package**
   - Get the `nextjs-module-builder.skill` (ZIP file) from your shared location
   - Save it to your computer

2. **Open Claude Desktop/Web**
   - Go to Claude (desktop app or web)

3. **Import the Skill**
   - Click on your **profile/settings icon**
   - Go to **"Skills"** or **"Custom Instructions"**
   - Click **"Import Skill"** or **"Add Custom Skill"**
   - Select the `nextjs-module-builder.skill` file
   - Click **"Import"**

4. **Verify Installation**
   - You should see "nextjs-module-builder" in your skills list
   - The description should read: "Complete workflow for building new modules in Next.js 15 (App Router) with Supabase backend..."

---

## 🚀 Step 3: Using the Skill

### When to Use This Skill

Use this skill whenever you need to:
- ✅ Create a new CRUD module (e.g., Courses, Students, Departments)
- ✅ Build data management features
- ✅ Add new database tables with UI
- ✅ Follow the 5-layer architecture
- ✅ Implement forms with validation
- ✅ Set up permissions for a module

### How Claude Will Use It

The skill **automatically activates** when you ask Claude to:
- "Create a new courses module with CRUD operations"
- "Build a student management feature"
- "Add a departments module following our architecture"
- "Create a new feature for managing exams"

### Example Usage Scenarios

#### Scenario 1: Creating a New Module

**What You Say:**
```
"I need to create a new Courses module with full CRUD operations.
The course should have: code, name, description, credits, and belong to a department."
```

**What Claude Will Do:**
1. ✅ Ask clarifying questions about the database schema
2. ✅ Follow the 5-layer workflow:
   - Create TypeScript types
   - Build service layer with Supabase
   - Create React hooks
   - Build UI components with Shadcn/UI
   - Create pages with routing
   - Set up permissions
3. ✅ Generate all necessary files
4. ✅ Include proper error handling, loading states, and validation
5. ✅ Apply MyJKKN standards automatically

#### Scenario 2: Adding Features to Existing Module

**What You Say:**
```
"Add search and filter functionality to the existing courses module"
```

**What Claude Will Do:**
1. ✅ Reference the hooks patterns for implementing search
2. ✅ Update the components with filter UI
3. ✅ Modify service layer for filter queries
4. ✅ Follow established patterns

#### Scenario 3: Implementing a Specific Layer

**What You Say:**
```
"Show me how to create the service layer for a Products module"
```

**What Claude Will Do:**
1. ✅ Reference service-patterns.md
2. ✅ Generate complete CRUD operations
3. ✅ Include error handling and logging
4. ✅ Add pagination and filtering

---

## 📚 Understanding the Skill Contents

The skill includes these reference guides:

| Reference File | What It Covers | When to Reference |
|---------------|----------------|-------------------|
| **architecture-patterns.md** | Overall 5-layer architecture, file structure | Starting any new module |
| **database-patterns.md** | Table schemas, RLS policies, indexes | Creating database tables |
| **typescript-patterns.md** | Types, interfaces, DTOs | Writing TypeScript code |
| **service-patterns.md** | Supabase operations, CRUD methods | Building API/service layer |
| **hooks-patterns.md** | React hooks, state management | Creating custom hooks |
| **component-patterns.md** | Forms, tables, UI components | Building UI components |
| **page-patterns.md** | Next.js pages, routing | Creating pages |
| **permission-patterns.md** | RBAC, permission guards | Adding access control |

---

## 💡 Best Practices for Team Usage

### 1. **Start Every Module the Same Way**

```
"Create a new [EntityName] module with CRUD operations.
Fields needed: [list fields]
Use the nextjs-module-builder skill."
```

### 2. **Reference Specific Patterns When Needed**

```
"How should I implement pagination for the courses list?
Check the service-patterns reference."
```

### 3. **Ask for Code Reviews**

```
"Review this service layer code against the service-patterns.md reference.
Does it follow MyJKKN standards?"
```

### 4. **Get Specific Examples**

```
"Show me a complete example of a form component with validation
following the component-patterns."
```

### 5. **Verify Architecture Compliance**

```
"Does this module follow the 5-layer architecture?
Check against architecture-patterns.md"
```

---

## 🎓 Training Your Team

### Week 1: Introduction (30 minutes)

**Agenda:**
1. Install the skill (5 min)
2. Demo: Build a simple module with Claude using the skill (15 min)
3. Q&A (10 min)

**Demo Module Suggestion:**
Create a simple "Categories" module with just `id`, `name`, and `description`

### Week 2: Practice (Individual)

**Task:**
Each developer builds one module using the skill:
- Track time taken
- Note any questions or issues
- Compare generated code with existing code

### Week 3: Review & Refine (30 minutes)

**Agenda:**
1. Share experiences (10 min)
2. Discuss improvements needed (10 min)
3. Document team-specific customizations (10 min)

---

## 🔧 Customizing for Your Team

### Adding Team-Specific Patterns

If your team has specific patterns not covered in the skill:

1. **Document the Pattern**
   - Create a new markdown file: `references/custom-pattern.md`
   - Follow the same format as existing references

2. **Update SKILL.md**
   - Add a reference to your custom pattern
   - Update the relevant section

3. **Re-package the Skill**
   - Follow Step 1 again to create updated package
   - Distribute to team

### Example Custom Pattern

```markdown
# references/myteam-custom-patterns.md

## Custom Email Notification Pattern

When creating any module that needs notifications:

1. Import EmailService
2. Add notification after successful create/update
3. Use template: `templates/entity-notification.html`

[Include code examples...]
```

---

## 📊 Measuring Success

### Metrics to Track

**Before Skill:**
- Time to create a module: ______ hours
- Code review iterations: ______
- Bugs found in QA: ______

**After Skill:**
- Time to create a module: ______ hours
- Code review iterations: ______
- Bugs found in QA: ______

### Quality Checklist

After using the skill to build a module, verify:

- [ ] All 5 layers implemented correctly
- [ ] TypeScript types match database schema
- [ ] Error handling present in all service methods
- [ ] Loading states in all components
- [ ] Permissions applied to all actions
- [ ] Form validation working
- [ ] RLS policies configured
- [ ] Console logging uses correct format
- [ ] Mobile responsive
- [ ] No `any` types used

---

## 🆘 Troubleshooting

### Issue: Claude Doesn't Use the Skill

**Solutions:**
1. Check the skill is installed: Settings → Skills
2. Use trigger words: "module", "CRUD", "feature", "following our architecture"
3. Explicitly mention: "Use the nextjs-module-builder skill"
4. Reinstall the skill if needed

### Issue: Generated Code Doesn't Match Our Style

**Solutions:**
1. Update the reference files with your team's patterns
2. Re-package and redistribute
3. Provide feedback to skill maintainer
4. Add custom reference file for team-specific patterns

### Issue: Skill Pattern Doesn't Fit My Use Case

**Solutions:**
1. Use the skill as a foundation
2. Adapt the pattern for your specific case
3. Document your adaptation
4. Consider updating the skill for future use

---

## 📞 Getting Help

### For Skill Usage Questions

1. Check the reference files in the skill
2. Ask in team chat: #dev-skills
3. Review QUICK_START_GUIDE.md
4. Contact skill maintainer

### For Skill Updates

1. Document improvement suggestion
2. Share in team meeting
3. Update reference files
4. Re-package and distribute

---

## 🎉 Success Stories Template

Share wins with the team:

```
🎉 Module Complete Using Skill!

Module: [Name]
Developer: [Your Name]
Time: [X hours]

Previous similar module: [Y hours]
Time saved: [Z hours]

What Went Well:
- [Point 1]
- [Point 2]

Challenges:
- [Point 1] → [How you solved it]

Tips for Others:
- [Tip 1]
- [Tip 2]
```

---

## 🔄 Keeping Skills Updated

### Monthly Skill Review

**Process:**
1. Collect feedback from team (first week)
2. Identify improvements needed (second week)
3. Update reference files (third week)
4. Re-package and distribute (fourth week)

### Version Tracking

```
v1.0.0 - October 2024
- Initial release
- All 8 reference patterns

v1.1.0 - November 2024
- Added custom notification pattern
- Updated TypeScript patterns for Zod v4
- Fixed permission examples

v2.0.0 - December 2024
- Major refactor for Next.js 15 stable
- Added streaming patterns
- Updated component examples
```

---

## 📝 Quick Reference Card

**Print this and keep at your desk:**

```
┌─────────────────────────────────────────────────┐
│  nextjs-module-builder Skill - Quick Reference  │
├─────────────────────────────────────────────────┤
│                                                 │
│  To create a new module:                        │
│  "Create a new [Entity] module with CRUD"       │
│                                                 │
│  5 Layers (in order):                           │
│  1. Types (types/)                              │
│  2. Services (lib/services/)                    │
│  3. Hooks (hooks/)                              │
│  4. Components (app/.../_components/)           │
│  5. Pages (app/(routes)/)                       │
│                                                 │
│  Always include:                                │
│  ✓ Permissions                                  │
│  ✓ Error handling                               │
│  ✓ Loading states                               │
│  ✓ Form validation                              │
│  ✓ RLS policies                                 │
│                                                 │
│  Naming:                                        │
│  - Files: kebab-case                            │
│  - Components: PascalCase                       │
│  - Functions: camelCase                         │
│  - Hooks: useCamelCase                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ✅ Ready to Start!

Your team is now ready to use the `nextjs-module-builder` skill!

**Next Steps:**
1. ✅ Install the skill (each team member)
2. ✅ Try building a simple module
3. ✅ Share results in team meeting
4. ✅ Celebrate faster, more consistent development!

---

**Questions?** Ask in your team's dev channel or contact the skill maintainer.

**Let's build consistently and ship faster! 🚀**
