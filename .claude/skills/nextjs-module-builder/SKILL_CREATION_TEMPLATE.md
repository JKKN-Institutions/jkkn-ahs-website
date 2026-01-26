# Skill Creation Template for Team

Use this template when creating new development skills for the team.

## Pre-Creation Checklist

Before creating a skill, answer these questions:

- [ ] What specific problem does this skill solve?
- [ ] What are 3-5 concrete examples of when to use it?
- [ ] What would a developer ask Claude that should trigger this skill?
- [ ] What reusable resources are needed (scripts/references/assets)?
- [ ] Does this overlap with existing skills? (If yes, merge instead)

## Step-by-Step Creation Process

### Step 1: Gather Requirements (30 min)

**Interview 2-3 team members who work in this area:**

Questions to ask:
1. "What tasks do you repeat often in this area?"
2. "What questions do you frequently Google?"
3. "What causes the most confusion for junior developers?"
4. "What patterns have you discovered that work well?"
5. "What mistakes do developers commonly make?"

**Document findings:**
```
Common Tasks:
- [Task 1]
- [Task 2]
- [Task 3]

Pain Points:
- [Pain point 1]
- [Pain point 2]

Best Practices:
- [Practice 1]
- [Practice 2]

Common Mistakes:
- [Mistake 1]
- [Mistake 2]
```

### Step 2: Plan Skill Contents (30 min)

**Identify what to include:**

```
SKILL.md Contents:
□ Overview (what and when)
□ Decision tree (if workflow-based)
□ Quick start guide
□ Step-by-step processes
□ Code examples
□ References to detailed files

Scripts to Create:
□ [Script 1: Purpose]
□ [Script 2: Purpose]
□ [Script 3: Purpose]

References to Create:
□ [Reference 1: Topic]
□ [Reference 2: Topic]
□ [Reference 3: Topic]

Assets to Include:
□ [Asset 1: Type]
□ [Asset 2: Type]
```

### Step 3: Initialize Skill (5 min)

```bash
# From project root
python3 /mnt/skills/public/skill-creator/scripts/init_skill.py [skill-name] --path ./skills

# Example for database skill:
python3 /mnt/skills/public/skill-creator/scripts/init_skill.py supabase-database-manager --path ./skills
```

### Step 4: Create Reference Files (1-2 hours)

**Reference file template:**

```markdown
# [Topic] Reference

Complete guide for [what this covers].

## Table of Contents

1. [Section 1](#section-1)
2. [Section 2](#section-2)
3. [Common Patterns](#common-patterns)
4. [Examples](#examples)
5. [Troubleshooting](#troubleshooting)

## Section 1

[Detailed explanation]

### Pattern 1
[Code example with explanation]

### Pattern 2
[Code example with explanation]

## Examples

### Example 1: [Use Case]
[Complete working example]

### Example 2: [Use Case]
[Complete working example]

## Common Patterns

### Pattern Name
**When to use:** [Description]
**Code:**
```[language]
[Code example]
```
**Notes:** [Important points]

## Troubleshooting

**Issue:** [Common problem]
**Solution:** [How to fix]
**Prevention:** [How to avoid]
```

**Create one reference file per major topic:**
- Keep each under 500 lines
- Include table of contents
- Use clear section headers
- Provide complete code examples
- Add troubleshooting section

### Step 5: Write SKILL.md (1-2 hours)

**Template structure:**

```markdown
---
name: skill-name
description: [What this skill does] Use when [specific trigger scenarios]. Covers [key capabilities].
---

# Skill Name

[One sentence overview of what the skill enables]

## When to Use This Skill

Use this skill when you need to:
- [Use case 1]
- [Use case 2]
- [Use case 3]

## Quick Start

[Minimal example showing basic usage]

## Workflow Decision Tree (if applicable)

1. First decision?
   - Option A → [Go to Section X]
   - Option B → [Go to Section Y]

2. Second decision?
   - Option A → [Go to Section Z]
   - Option B → [Complete]

## Main Sections

### Section 1: [Task Name]

**Overview:** [What this section covers]

**Steps:**
1. [Step 1 with code example]
2. [Step 2 with code example]
3. [Step 3 with code example]

**Example:**
```typescript
// Complete working example
```

**Common mistakes:**
- [Mistake 1] → [Solution]
- [Mistake 2] → [Solution]

**For more details:** See `references/[topic].md`

### Section 2: [Task Name]

[Same structure as Section 1]

## Best Practices

- ✅ DO: [Practice 1]
- ✅ DO: [Practice 2]
- ❌ DON'T: [Anti-pattern 1]
- ❌ DON'T: [Anti-pattern 2]

## Quick Reference

[Table or list of common commands/patterns]

## Resources

**Scripts:**
- `scripts/[name].py` - [What it does]

**References:**
- `references/[name].md` - [What it covers]

**Assets:**
- `assets/[name]` - [What it contains]
```

### Step 6: Create Scripts (1-2 hours)

**Script template:**

```python
#!/usr/bin/env python3
"""
Script Name: [name]
Purpose: [What this script does]
Usage: python [name].py [arguments]
Example: python [name].py --arg value
"""

import sys
import argparse
from pathlib import Path

def main():
    """Main script logic"""
    parser = argparse.ArgumentParser(description='[Script description]')
    parser.add_argument('--arg', type=str, help='[Argument description]')
    
    args = parser.parse_args()
    
    try:
        # Script logic here
        print(f"✅ Success: [What was accomplished]")
    except Exception as e:
        print(f"❌ Error: {str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
```

**Test all scripts thoroughly before packaging!**

### Step 7: Write Frontmatter (10 min)

**Template:**

```yaml
---
name: skill-name
description: [2-3 sentences. Include WHAT the skill does, WHEN to use it, and KEY capabilities it covers. Be specific enough that Claude can decide when to use this skill vs others.]
---
```

**Good description example:**
```yaml
description: Comprehensive guide for Supabase database operations including schema design, RLS policies, and query optimization. Use when creating tables, debugging permissions, writing migrations, or optimizing database performance. Covers PostgreSQL patterns, Row Level Security, indexes, and common Supabase issues.
```

**Bad description example:**
```yaml
description: Helps with database stuff.
```

### Step 8: Test the Skill (30 min)

**Testing checklist:**

1. **Test with Claude:**
   ```
   Ask Claude: "I need to [use case from skill description]"
   Verify: Does Claude load the skill?
   Verify: Does Claude provide helpful guidance?
   ```

2. **Test examples:**
   ```
   Copy code examples from skill
   Try running them in your codebase
   Verify they work without modification
   ```

3. **Test scripts:**
   ```
   Run each script with valid inputs
   Run each script with invalid inputs
   Verify error handling works
   ```

4. **Test decision trees:**
   ```
   Follow each path in decision tree
   Verify all paths lead to valid outcomes
   Check for dead ends or loops
   ```

5. **Test references:**
   ```
   Verify all reference file links work
   Check table of contents matches sections
   Verify code examples are complete
   ```

### Step 9: Package the Skill (5 min)

```bash
# Validate and package
python3 /mnt/skills/public/skill-creator/scripts/package_skill.py ./skills/[skill-name] ./dist

# If validation fails, fix issues and retry
# Output will be: ./dist/[skill-name].skill
```

### Step 10: Share with Team (15 min)

**Announcement template:**

```markdown
📦 New Skill Available: [Skill Name]

**What it does:** [One sentence]

**Use it when:**
- [Use case 1]
- [Use case 2]
- [Use case 3]

**Key features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]

**How to install:**
1. Download [skill-name].skill
2. Open Claude
3. Skills tab → Import Skill
4. Upload the file

**Try it out:**
Ask Claude: "[Example trigger phrase]"

**Feedback welcome!** Let me know how it works for you.
```

---

## Quality Checklist

Before sharing, verify:

**SKILL.md:**
- [ ] Frontmatter has clear, specific description
- [ ] Includes when to use this skill
- [ ] Has practical code examples
- [ ] References all bundled resources
- [ ] Under 500 lines (main content)
- [ ] No TODOs left in content

**Reference Files:**
- [ ] Each has table of contents
- [ ] Complete code examples
- [ ] Covers common use cases
- [ ] Includes troubleshooting
- [ ] Under 1000 lines each

**Scripts:**
- [ ] All scripts tested and working
- [ ] Have clear usage documentation
- [ ] Handle errors gracefully
- [ ] Provide helpful output

**Testing:**
- [ ] Tested with Claude successfully
- [ ] Code examples work in codebase
- [ ] Decision trees have no dead ends
- [ ] All links and references valid

---

## Skill Priorities for Team

### Priority 1: Database & Backend (Create First)
```
1. Supabase Database Manager
   - Lead: [Senior Dev Name]
   - Deadline: [Date]
   - Status: Not Started
   
2. TypeScript Code Standards
   - Lead: [Mid Dev Name]
   - Deadline: [Date]
   - Status: Not Started
   
3. API Integration & Service Layer
   - Lead: [Senior Dev Name]
   - Deadline: [Date]
   - Status: Not Started
```

### Priority 2: Frontend & State (Create Second)
```
4. React Hooks & State Management
   - Lead: [Mid Dev Name]
   - Deadline: [Date]
   - Status: Not Started
   
5. Shadcn/UI Component Library
   - Lead: [Junior Dev Name]
   - Deadline: [Date]
   - Status: Not Started
```

### Priority 3: Quality & Deployment (Create Third)
```
6. Testing & Quality Assurance
   - Lead: [Mid Dev Name]
   - Deadline: [Date]
   - Status: Not Started
   
7. Deployment & DevOps
   - Lead: [Senior Dev Name]
   - Deadline: [Date]
   - Status: Not Started
```

---

## Getting Help

**Stuck on creating a skill?**

1. Review existing skills for patterns
2. Read /mnt/skills/public/skill-creator/SKILL.md
3. Ask team lead for guidance
4. Pair with another developer

**Need examples?**

- nextjs-module-builder skill (reference)
- /mnt/skills/public/* (official examples)
- Team's existing documentation

**Testing issues?**

- Test with real use cases
- Get feedback from another developer
- Iterate based on actual usage

---

## Tips for Success

1. **Start small:** Begin with one well-defined area
2. **Use examples:** Real code examples > explanations
3. **Test thoroughly:** Use the skill yourself first
4. **Iterate:** Skills improve with usage feedback
5. **Document:** Clear descriptions help Claude decide when to use
6. **Collaborate:** Get input from multiple team members

---

## Maintenance Plan

**Monthly skill review:**
- Gather feedback from team
- Identify common issues
- Update with new patterns
- Remove outdated content
- Re-package and redistribute

**Skill version tracking:**
```
v1.0.0 - Initial release
v1.1.0 - Added X pattern, fixed Y issue
v1.2.0 - Updated for Next.js 15 changes
```

---

Remember: The goal is to make your team more productive and consistent. Focus on solving real problems you encounter daily!
