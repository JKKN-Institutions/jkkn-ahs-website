# How to Package This Skill

## Quick Method (Windows)

### Step 1: Navigate to Skills Folder
1. Open File Explorer
2. Go to: `D:\JKKN\Claude-Code-plugins\skills\`

### Step 2: Create ZIP File
1. **Right-click** on the `nextjs-module-builder` folder
2. Select **"Send to"** → **"Compressed (zipped) folder"**
3. A ZIP file will be created: `nextjs-module-builder.zip`

### Step 3: Rename for Distribution
1. Rename `nextjs-module-builder.zip` to `nextjs-module-builder.skill`
2. The `.skill` extension helps identify it as a Claude skill package

### Step 4: Distribute to Team
Move the `nextjs-module-builder.skill` file to a shared location:
- Google Drive
- SharePoint
- Microsoft Teams
- Shared network drive
- Email to team members

---

## Alternative: Using Python Script

If you have Python installed:

```bash
# Open Command Prompt or PowerShell
cd D:\JKKN\Claude-Code-plugins\skills\skill-creator\scripts

# Run the packaging script
python package_skill.py "D:\JKKN\Claude-Code-plugins\skills\nextjs-module-builder" "D:\JKKN\Claude-Code-plugins\dist"
```

The packaged skill will be created at:
```
D:\JKKN\Claude-Code-plugins\dist\nextjs-module-builder.skill
```

---

## What Gets Packaged

The skill package includes:

```
nextjs-module-builder/
├── SKILL.md                          ← Main skill file (required)
├── README.md                         ← Documentation
├── TEAM_USAGE_GUIDE.md              ← Team guide
├── EXECUTIVE_SUMMARY.md             ← Executive overview
├── QUICK_START_GUIDE.md             ← Quick start
├── DEVELOPMENT_SKILLS_ROADMAP.md    ← Roadmap
├── SKILL_CREATION_TEMPLATE.md       ← Template
└── references/                       ← Reference documentation
    ├── architecture-patterns.md
    ├── database-patterns.md
    ├── typescript-patterns.md
    ├── service-patterns.md
    ├── hooks-patterns.md
    ├── component-patterns.md
    ├── page-patterns.md
    └── permission-patterns.md
```

**Total Size:** ~160 KB (compressed)

---

## Verification

After packaging, verify the skill:

1. **Check File Size**
   - Should be around 40-60 KB (compressed ZIP)

2. **Test Import**
   - Try importing in Claude
   - Should show skill name and description
   - No errors during import

3. **Test Usage**
   - Ask Claude: "Create a test module using nextjs-module-builder skill"
   - Claude should reference the skill patterns

---

## Version Tracking

When re-packaging updates:

1. Update version in `SKILL.md` frontmatter:
   ```yaml
   ---
   name: nextjs-module-builder
   description: Complete workflow for building...
   version: 1.1.0  # ← Update this
   ---
   ```

2. Document changes in `CHANGELOG.md` (create if needed)

3. Rename package: `nextjs-module-builder-v1.1.0.skill`

---

## Distribution Checklist

Before sending to team:

- [ ] All reference files present (8 files)
- [ ] SKILL.md has correct frontmatter
- [ ] TEAM_USAGE_GUIDE.md included
- [ ] ZIP renamed to `.skill` extension
- [ ] Tested import in Claude
- [ ] Size is reasonable (~40-60 KB)
- [ ] No unnecessary files (no .git, node_modules, etc.)

---

## Need Help?

If packaging fails:
1. Check all files are present
2. Ensure no file path errors
3. Try the manual ZIP method
4. Contact tech support

**Ready to distribute! 🎉**
