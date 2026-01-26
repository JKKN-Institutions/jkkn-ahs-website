#!/bin/bash

###############################################################################
# Bug Reporter SDK Quick Setup Script
#
# This script automates the initial setup of the Bug Reporter SDK in a
# Next.js 15+ project with App Router.
#
# Usage: bash setup-bug-reporter.sh
###############################################################################

set -e  # Exit on error

COLORS_RED='\033[0;31m'
COLORS_GREEN='\033[0;32m'
COLORS_YELLOW='\033[1;33m'
COLORS_BLUE='\033[0;34m'
COLORS_CYAN='\033[0;36m'
COLORS_NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "\n${COLORS_CYAN}========================================${COLORS_NC}"
    echo -e "${COLORS_CYAN}$1${COLORS_NC}"
    echo -e "${COLORS_CYAN}========================================${COLORS_NC}\n"
}

print_success() {
    echo -e "${COLORS_GREEN}✓ $1${COLORS_NC}"
}

print_error() {
    echo -e "${COLORS_RED}✗ $1${COLORS_NC}"
}

print_warning() {
    echo -e "${COLORS_YELLOW}⚠ $1${COLORS_NC}"
}

print_info() {
    echo -e "${COLORS_BLUE}ℹ $1${COLORS_NC}"
}

# Check prerequisites
check_prerequisites() {
    print_header "Checking Prerequisites"

    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    print_success "Node.js $(node --version) detected"

    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    print_success "npm $(npm --version) detected"

    # Check package.json
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Are you in a Next.js project?"
        exit 1
    fi
    print_success "package.json found"

    # Check Next.js App Router
    if [ ! -d "app" ]; then
        print_warning "app directory not found. This script assumes Next.js 15+ with App Router"
    else
        print_success "app directory found (App Router detected)"
    fi
}

# Install packages
install_packages() {
    print_header "Installing Packages"

    print_info "Installing @boobalan_jkkn/bug-reporter-sdk..."
    npm install @boobalan_jkkn/bug-reporter-sdk

    print_info "Installing react-hot-toast (for notifications)..."
    npm install react-hot-toast

    print_success "Packages installed successfully"
}

# Setup environment variables
setup_env() {
    print_header "Setting Up Environment Variables"

    if [ -f ".env.local" ]; then
        print_warning ".env.local already exists"
        read -p "Do you want to append Bug Reporter config? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Skipping environment setup"
            return
        fi
    fi

    echo "" >> .env.local
    echo "# JKKN Bug Reporter Configuration" >> .env.local
    echo "NEXT_PUBLIC_BUG_REPORTER_API_KEY=app_your_api_key_here" >> .env.local
    echo "NEXT_PUBLIC_BUG_REPORTER_API_URL=https://your-platform.vercel.app" >> .env.local

    print_success ".env.local updated with Bug Reporter configuration"
    print_warning "IMPORTANT: Update the API key and URL with your actual credentials!"

    # Ensure .env.local is in .gitignore
    if [ -f ".gitignore" ]; then
        if ! grep -q ".env.local" .gitignore; then
            echo ".env.local" >> .gitignore
            print_success "Added .env.local to .gitignore"
        fi
    fi
}

# Get API credentials prompt
prompt_api_credentials() {
    print_header "API Credentials Setup"

    echo -e "${COLORS_YELLOW}You need API credentials from the JKKN Bug Reporter platform.${COLORS_NC}"
    echo ""
    echo "Steps to get your API key:"
    echo "  1. Visit the Bug Reporter platform login page"
    echo "  2. Create or join an organization"
    echo "  3. Register a new application"
    echo "  4. Copy the generated API key (starts with 'app_')"
    echo ""

    read -p "Do you have your API credentials? (y/n): " -n 1 -r
    echo

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your API key (app_xxxxx): " api_key
        read -p "Enter your platform URL (https://...): " api_url

        # Update .env.local with actual values
        if [ -f ".env.local" ]; then
            # Use different delimiters for sed to avoid issues with URLs
            sed -i "s|NEXT_PUBLIC_BUG_REPORTER_API_KEY=.*|NEXT_PUBLIC_BUG_REPORTER_API_KEY=$api_key|" .env.local
            sed -i "s|NEXT_PUBLIC_BUG_REPORTER_API_URL=.*|NEXT_PUBLIC_BUG_REPORTER_API_URL=$api_url|" .env.local
            print_success "API credentials saved to .env.local"
        fi
    else
        print_warning "Remember to update .env.local with your API credentials before testing!"
    fi
}

# Final instructions
print_final_instructions() {
    print_header "Setup Complete!"

    echo -e "${COLORS_GREEN}Bug Reporter SDK has been installed and configured.${COLORS_NC}"
    echo ""
    echo -e "${COLORS_CYAN}Next Steps:${COLORS_NC}"
    echo "  1. Update app/layout.tsx with BugReporterProvider"
    echo "  2. Ensure .env.local has your actual API credentials"
    echo "  3. Start your dev server: npm run dev"
    echo "  4. Look for the floating bug button (bottom-right)"
    echo ""
    echo -e "${COLORS_CYAN}For detailed integration:${COLORS_NC}"
    echo "  • Run the diagnostic: node .claude/skills/bug-boundary-integration/scripts/diagnose-integration.js"
    echo "  • See integration guide: .claude/skills/bug-boundary-integration/references/integration-guide.md"
    echo ""
    echo -e "${COLORS_YELLOW}Note:${COLORS_NC} You still need to manually integrate BugReporterProvider in your app/layout.tsx"
    echo "      Use the skill for step-by-step integration guidance."
}

# Main execution
main() {
    echo -e "${COLORS_CYAN}"
    echo "╔═══════════════════════════════════════════════════════╗"
    echo "║    Bug Reporter SDK Quick Setup                       ║"
    echo "║    For Next.js 15+ with App Router                   ║"
    echo "╚═══════════════════════════════════════════════════════╝"
    echo -e "${COLORS_NC}"

    check_prerequisites
    install_packages
    setup_env
    prompt_api_credentials
    print_final_instructions
}

# Run main function
main
