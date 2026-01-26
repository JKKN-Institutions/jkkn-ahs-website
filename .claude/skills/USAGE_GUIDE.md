# Claude Skills - Quick Usage Guide

## What Are Claude Skills?

Claude Skills are pre-defined, reusable workflows that help Claude handle common development tasks consistently and efficiently. Think of them as "playbooks" that Claude follows when encountering specific patterns or problems.

## Why Use Skills?

### Without Skills:
```
User: "Fix the toast errors in this file"
Claude: *Manually updates each toast call, might miss some, inconsistent approach*
```

### With Skills:
```
User: "Fix the toast errors in this file"
Claude: *Loads toast-migrator skill, systematic approach, catches all instances*
```

## Available Skills

### 🍞 Toast Migrator
**File**: `.claude/skills/toast-migrator.md`

**What it does**: Migrates files from custom `useToast` hook to direct `react-hot-toast` usage

**Triggers automatically when**:
- File contains `import { useToast }`
- File contains `toast({ title:`
- User mentions "toast error" or "fix toast"

**Manual invocation**:
```
"Use toast-migrator skill on app/(routes)/academic/attendance/page.tsx"
```

## How to Use Skills

### Method 1: Let Claude Auto-Detect
Just mention the problem - Claude will detect and use the right skill:

```
❌ User: "app/(routes)/billing/page.tsx has toast errors"
✅ Claude: [Detects useToast pattern, loads toast-migrator, fixes file]
```

### Method 2: Explicit Skill Request
Tell Claude which skill to use:

```
"Use the toast-migrator skill to fix all files in app/(routes)/academic/"
```

### Method 3: Load at Session Start
Add to your session starter (`.claude/START_SESSION.md`):

```
Load all skills from .claude/skills/ and auto-apply when patterns detected
```

## Real-World Examples

### Example 1: Single File Migration
```
User: "Check app/(routes)/academic/timetables/[id]/page.tsx - it shows toast errors"

Claude:
1. Reads file
2. Detects useToast import and toast({ patterns
3. Loads toast-migrator skill
4. Applies systematic migration
5. Verifies 0 useToast and 0 toast({ remaining
6. Reports completion
```

### Example 2: Multiple File Migration
```
User: "Update all toast usage in app/(routes)/academic/ directory"

Claude:
1. Finds all files with useToast
2. Prioritizes by usage
3. Applies toast-migrator skill to each file
4. Tracks progress
5. Reports summary
```

### Example 3: Partial Migration
```
User: "This function has toast errors" [shares code snippet]

Claude:
1. Recognizes toast({ pattern
2. Applies migration patterns from skill
3. Returns updated code
4. Explains changes
```

## Skill Benefits

### ✅ Consistency
Every toast migration follows the same patterns and best practices

### ✅ Completeness
Skills include verification steps to ensure nothing is missed

### ✅ Speed
Claude doesn't need to "figure out" the approach each time

### ✅ Quality
Skills document edge cases and common mistakes to avoid

### ✅ Learning
Skills serve as documentation for the team

## Creating Your Own Skills

### When to Create a Skill

Create a skill when you find yourself:
- Explaining the same process multiple times
- Manually fixing the same pattern across files
- Needing consistent approach to a specific task
- Onboarding new developers with repetitive instructions

### Skill Creation Template

1. **Identify the pattern**: What repetitive task needs automation?
2. **Document current process**: How do you do it manually?
3. **Define detection**: How should Claude recognize when to use this?
4. **Write systematic steps**: Break down into clear, sequential actions
5. **Add verification**: How to confirm it worked?
6. **Document edge cases**: What can go wrong?
7. **Test on real code**: Does it work in practice?

### Example Skill Ideas for MyJKKN

1. **Component Creator**: Create new components with standard structure
2. **API Route Generator**: Generate API routes with validation and error handling
3. **Database Migration**: Add columns following MyJKKN conventions
4. **Type Generator**: Generate TypeScript types from database schema
5. **Test Creator**: Generate tests for components and services
6. **Error Handler**: Standardize error handling patterns

## Skill Best Practices

### DO ✅
- Make skills focused on one specific task
- Include clear auto-detection patterns
- Provide verification steps
- Document edge cases
- Keep updated with project changes

### DON'T ❌
- Create overlapping skills (confuses Claude)
- Make skills too generic (defeats the purpose)
- Skip verification steps (causes incomplete work)
- Forget to test on real code (theory ≠ practice)

## Troubleshooting

### Skill Not Triggering
**Problem**: Claude doesn't use skill automatically

**Solution**:
1. Check if session loaded skills (see START_SESSION.md)
2. Verify detection patterns match your case
3. Manually invoke: "Use [skill-name] skill"

### Skill Incomplete
**Problem**: Skill doesn't finish the job

**Solution**:
1. Check if file was modified during process
2. Re-read file and continue
3. Verify verification steps in skill
4. Update skill if pattern is missing

### Wrong Skill Used
**Problem**: Claude uses wrong skill for the task

**Solution**:
1. Check if detection patterns are too broad
2. Make patterns more specific
3. Explicitly specify: "Use [skill-name] skill"

## Integration with Workflow

### Daily Development
```bash
# Start session
1. Open Claude Code
2. Paste Quick Start from START_SESSION.md
   → Skills automatically loaded

# During work
3. When you encounter pattern → Skill auto-applies
4. Or explicitly invoke → "Use [skill] on [file]"
```

### Code Review
```bash
# Before committing
1. "Use toast-migrator to check app/(routes)/"
2. "Use [future-skill] to verify patterns"
3. Commit with confidence
```

### Refactoring
```bash
# Large-scale updates
1. "Use toast-migrator on all files with useToast"
2. Track progress
3. Verify completeness
4. Test thoroughly
```

## Measuring Success

### Metrics to Track
- Time saved per task
- Consistency improvement
- Error reduction
- Developer satisfaction

### Feedback Loop
1. Use skill on real task
2. Note what worked / didn't work
3. Update skill based on learnings
4. Share improvements with team

## Advanced Usage

### Chaining Skills
```
"Use toast-migrator skill first, then run type-checker skill"
```

### Conditional Skills
```
"If file has useToast, use toast-migrator; if has old API patterns, use api-updater"
```

### Custom Parameters
```
"Use toast-migrator but keep duration at 5000ms for all toasts"
```

## FAQ

**Q: Do skills replace Claude's intelligence?**
A: No, skills guide Claude's approach. Claude still adapts to specific situations.

**Q: Can I modify skills?**
A: Yes! Skills are markdown files you can edit anytime.

**Q: How many skills should I create?**
A: Start small. Create skills for tasks you do weekly. Quality > quantity.

**Q: Do skills work with Task agents?**
A: Yes! Task agents can follow skill instructions for complex operations.

**Q: What if skill is outdated?**
A: Update the skill file. Add version number and last-updated date.

## Next Steps

1. **Try it**: Use toast-migrator on a file with toast errors
2. **Observe**: Watch how systematic the approach is
3. **Identify**: What other repetitive tasks do you have?
4. **Create**: Make your own skill for that task
5. **Share**: Document and share with team

---

**Remember**: Skills are living documents. Update them as you learn!

**Questions?** Check `.claude/skills/README.md` for more details
