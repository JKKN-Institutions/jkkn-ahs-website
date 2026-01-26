# Bug Boundary Integration Skill

**Production-ready JKKN Bug Reporter SDK integration for Next.js 15+ with Supabase**

## Overview

This skill provides comprehensive, error-free integration guidance for the `@boobalan_jkkn/bug-reporter-sdk` package in Next.js applications. Unlike manual integration from documentation, this skill includes:

- **Automated diagnostic tools** to identify configuration issues
- **Step-by-step workflows** for common integration scenarios
- **Production-ready patterns** for Supabase authentication
- **Quick setup scripts** to accelerate initial configuration
- **Comprehensive troubleshooting** guides

## What's Included

### SKILL.md
Main skill file containing:
- 4 complete integration workflows (Fresh, Fix, Advanced, Upgrade)
- Best practices and common pitfalls
- Quick reference commands
- Implementation guidelines

### Scripts

#### `scripts/diagnose-integration.js`
Automated diagnostic tool that validates:
- ✓ Package installation and versions
- ✓ Environment variable configuration
- ✓ Next.js layout integration
- ✓ Supabase authentication setup
- ✓ TypeScript configuration

**Usage:**
```bash
node .claude/skills/bug-boundary-integration/scripts/diagnose-integration.js
```

#### `scripts/setup-bug-reporter.sh`
Quick setup automation that:
- ✓ Verifies prerequisites
- ✓ Installs packages
- ✓ Creates environment variables
- ✓ Prompts for API credentials
- ✓ Provides guided next steps

**Usage:**
```bash
bash .claude/skills/bug-boundary-integration/scripts/setup-bug-reporter.sh
```

### References

#### `references/integration-guide.md`
Comprehensive documentation covering:
- Package information and installation methods
- Environment requirements
- Core integration patterns
- Advanced features (My Bugs Panel, programmatic reporting, custom styling)
- API key setup process
- Troubleshooting guide
- Version upgrade instructions

## When to Use This Skill

The skill automatically triggers when you mention:
- "bug reporter"
- "bug boundary"
- "bug tracking"
- "@boobalan_jkkn/bug-reporter-sdk"
- Integration issues with bug reporting

You can also manually invoke it when:
- Setting up bug reporting for the first time
- Troubleshooting integration issues
- Adding advanced features
- Upgrading SDK versions

## Quick Start

### Option 1: Automated Setup
```bash
# Run the quick setup script
bash .claude/skills/bug-boundary-integration/scripts/setup-bug-reporter.sh

# Follow the prompts to complete setup
```

### Option 2: Use the Skill with Claude
Simply ask Claude:
- "Help me integrate the Bug Reporter SDK"
- "Fix my bug boundary integration"
- "Add bug reporting to my Next.js app"

The skill will guide you through the appropriate workflow.

## Common Use Cases

### 1. Fresh Integration
**Scenario:** Adding Bug Reporter SDK to a project for the first time

**Workflow:** The skill will guide you through:
1. Verifying prerequisites
2. Installing packages
3. Configuring environment variables
4. Integrating into Next.js layout
5. Testing the integration

### 2. Fixing Issues
**Scenario:** Bug reporter widget not appearing or API errors

**Workflow:** The skill will:
1. Run automated diagnostics
2. Identify specific issues
3. Provide targeted solutions
4. Verify fixes with testing

### 3. Adding Features
**Scenario:** Implementing "My Bugs" panel or programmatic reporting

**Workflow:** The skill provides:
1. Feature-specific implementation code
2. Integration with existing setup
3. Testing guidelines

### 4. Upgrading
**Scenario:** Updating to the latest SDK version

**Workflow:** The skill covers:
1. Version checking
2. Update commands
3. Breaking change review
4. Post-upgrade testing

## Features

### Automated Diagnostics
- Checks all configuration points
- Identifies specific issues
- Provides actionable recommendations
- Validates after fixes

### Production Patterns
- Supabase authentication integration
- Environment-based conditional rendering
- Secure API key management
- Error boundary integration

### Troubleshooting
- Widget not appearing
- API key validation failed
- Screenshot capture issues
- Console log problems
- NPM installation errors

## Requirements

- **Next.js**: 15+ with App Router
- **React**: 19+
- **Node.js**: 18+
- **TypeScript**: 5+ (recommended)

## Package Information

- **Package**: `@boobalan_jkkn/bug-reporter-sdk`
- **Latest Version**: 1.1.0
- **Size**: 18.6 KB (86.4 KB unpacked)
- **NPM**: https://www.npmjs.com/package/@boobalan_jkkn/bug-reporter-sdk

## Environment Variables

```env
NEXT_PUBLIC_BUG_REPORTER_API_KEY=app_your_api_key_here
NEXT_PUBLIC_BUG_REPORTER_API_URL=https://your-platform.vercel.app
```

## Installation

The skill is already installed in your Claude Code environment. It will automatically activate when relevant topics are mentioned.

To manually use the skill:
```
Ask Claude: "Use the bug-boundary-integration skill to help me..."
```

## Support

### Running Diagnostics
```bash
node .claude/skills/bug-boundary-integration/scripts/diagnose-integration.js
```

### Getting Help
- Review `SKILL.md` for complete workflows
- Check `references/integration-guide.md` for detailed documentation
- Run diagnostic script to identify specific issues
- Ask Claude with the skill activated

## Version History

### v1.0.0 (Current)
- Initial skill creation
- Support for Bug Reporter SDK v1.1.0+
- Automated diagnostics and setup scripts
- Complete integration workflows
- Supabase authentication patterns
- Comprehensive troubleshooting guides

## License

This skill is part of the Mentor Module project and follows the same license.

## Credits

Created for production-ready Bug Reporter SDK integration based on:
- Official Bug Reporter SDK documentation
- JKKN framework requirements
- Next.js 15+ best practices
- Real-world integration patterns
