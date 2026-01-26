#!/usr/bin/env python3
"""
MyJKKN API Endpoint Tester

This script tests MyJKKN API endpoints to verify API key validity and connectivity.

Usage:
    python test_endpoint.py --key jk_xxxxx
    python test_endpoint.py --endpoint students --key jk_xxxxx
    python test_endpoint.py --endpoint students --key jk_xxxxx --page 1 --limit 5
    python test_endpoint.py --endpoint staff --key jk_xxxxx --all
"""

import argparse
import requests
import json
import sys
from typing import Dict, Any, Optional

API_BASE_URL = 'https://jkkn.ai/api'

ENDPOINTS = {
    'students': '/api-management/students',
    'staff': '/api-management/staff',
    'institutions': '/api-management/organizations/institutions',
    'departments': '/api-management/organizations/departments',
    'programs': '/api-management/organizations/programs',
    'degrees': '/api-management/organizations/degrees',
    'courses': '/api-management/organizations/courses',
    'semesters': '/api-management/organizations/semesters',
}

class Colors:
    """ANSI color codes for terminal output"""
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    BOLD = '\033[1m'
    END = '\033[0m'

def print_success(message: str):
    print(f"{Colors.GREEN}✅ {message}{Colors.END}")

def print_error(message: str):
    print(f"{Colors.RED}❌ {message}{Colors.END}")

def print_info(message: str):
    print(f"{Colors.BLUE}ℹ️  {message}{Colors.END}")

def print_warning(message: str):
    print(f"{Colors.YELLOW}⚠️  {message}{Colors.END}")

def print_header(message: str):
    print(f"\n{Colors.BOLD}{Colors.CYAN}{'='*60}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.CYAN}{message}{Colors.END}")
    print(f"{Colors.BOLD}{Colors.CYAN}{'='*60}{Colors.END}\n")

def test_endpoint(
    endpoint: str,
    api_key: str,
    params: Optional[Dict[str, Any]] = None,
    base_url: str = API_BASE_URL
) -> tuple[bool, Any, Optional[str]]:
    """
    Test an API endpoint

    Returns:
        tuple: (success, data, error_message)
    """
    url = f"{base_url}{ENDPOINTS[endpoint]}"

    headers = {
        'Authorization': f'Bearer {api_key}',
        'Accept': 'application/json'
    }

    try:
        response = requests.get(url, headers=headers, params=params or {}, timeout=10)

        if response.status_code == 200:
            return True, response.json(), None
        elif response.status_code == 401:
            error_data = response.json()
            return False, None, f"Authentication failed: {error_data.get('error', 'Invalid API key')}"
        elif response.status_code == 403:
            error_data = response.json()
            return False, None, f"Permission denied: {error_data.get('error', 'Insufficient permissions')}"
        elif response.status_code == 404:
            return False, None, "Endpoint not found (404)"
        else:
            error_data = response.json() if response.headers.get('content-type') == 'application/json' else {}
            return False, None, f"HTTP {response.status_code}: {error_data.get('error', 'Unknown error')}"

    except requests.exceptions.Timeout:
        return False, None, "Request timeout (10s)"
    except requests.exceptions.ConnectionError:
        return False, None, "Connection error - check network connectivity"
    except requests.exceptions.RequestException as e:
        return False, None, f"Request error: {str(e)}"
    except Exception as e:
        return False, None, f"Unexpected error: {str(e)}"

def format_json(data: Any, indent: int = 2) -> str:
    """Format JSON data for pretty printing"""
    return json.dumps(data, indent=indent, ensure_ascii=False)

def display_results(data: Dict[str, Any], show_full: bool = False):
    """Display API response results"""

    # Display metadata if present
    if 'metadata' in data:
        metadata = data['metadata']
        print_header("Response Metadata")
        print(f"  Total Records: {metadata.get('total', 'N/A')}")
        print(f"  Current Page: {metadata.get('page', 'N/A')}")
        print(f"  Per Page: {metadata.get('limit', 'N/A')}")
        print(f"  Total Pages: {metadata.get('totalPages', 'N/A')}")
        print(f"  Returned: {metadata.get('returned', len(data.get('data', [])))}")

    # Display data
    if 'data' in data:
        items = data['data']
        print_header(f"Data ({len(items)} items)")

        if show_full:
            print(format_json(items))
        else:
            # Show preview of first 3 items
            preview_count = min(3, len(items))
            for i, item in enumerate(items[:preview_count], 1):
                print(f"\n{Colors.BOLD}Item {i}:{Colors.END}")
                # Show only key fields
                if 'id' in item:
                    print(f"  ID: {item['id']}")
                if 'roll_number' in item:
                    print(f"  Roll Number: {item['roll_number']}")
                if 'first_name' in item and 'last_name' in item:
                    print(f"  Name: {item['first_name']} {item['last_name']}")
                if 'staff_id' in item:
                    print(f"  Staff ID: {item['staff_id']}")
                if 'name' in item:
                    print(f"  Name: {item['name']}")
                if 'department_name' in item:
                    print(f"  Department: {item['department_name']}")
                if 'program_name' in item:
                    print(f"  Program: {item['program_name']}")
                if 'degree_name' in item:
                    print(f"  Degree: {item['degree_name']}")
                if 'course_name' in item:
                    print(f"  Course: {item['course_name']}")
                if 'semester_name' in item:
                    print(f"  Semester: {item['semester_name']}")

            if len(items) > preview_count:
                print(f"\n{Colors.CYAN}  ... and {len(items) - preview_count} more items{Colors.END}")
                print(f"{Colors.CYAN}  Use --full flag to see all data{Colors.END}")

def run_tests(
    endpoint: str,
    api_key: str,
    params: Dict[str, Any],
    show_full: bool = False
):
    """Run endpoint tests"""

    print_header(f"Testing {endpoint.upper()} endpoint")

    # Build params display
    params_display = ', '.join([f"{k}={v}" for k, v in params.items()]) if params else "None"
    print_info(f"Parameters: {params_display}")
    print_info(f"URL: {API_BASE_URL}{ENDPOINTS[endpoint]}")
    print()

    # Test endpoint
    success, data, error = test_endpoint(endpoint, api_key, params)

    if success:
        print_success("API request successful!")
        display_results(data, show_full)
    else:
        print_error(f"API request failed: {error}")

        # Provide helpful suggestions
        print()
        print_warning("Troubleshooting tips:")
        if "Authentication failed" in error or "Invalid API key" in error:
            print("  1. Verify your API key is correct")
            print("  2. Check if the API key has expired")
            print("  3. Ensure the API key is active in MyJKKN API Management")
        elif "Permission denied" in error:
            print("  1. Check API key permissions (read access required)")
            print("  2. Contact MyJKKN administrator to update permissions")
        elif "Connection error" in error:
            print("  1. Check your internet connection")
            print("  2. Verify the API URL is correct")
            print("  3. Check if firewall is blocking requests")

        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(
        description='Test MyJKKN API endpoints',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=f'''
Examples:
  # Test with default parameters (students endpoint, page 1, limit 10)
  python test_endpoint.py --key jk_xxxxx

  # Test specific endpoint
  python test_endpoint.py --endpoint staff --key jk_xxxxx

  # Test with custom pagination
  python test_endpoint.py --endpoint students --key jk_xxxxx --page 2 --limit 20

  # Fetch all staff (no pagination)
  python test_endpoint.py --endpoint staff --key jk_xxxxx --all

  # Test with filters
  python test_endpoint.py --endpoint departments --key jk_xxxxx --institution-id abc123

  # Show full response
  python test_endpoint.py --endpoint students --key jk_xxxxx --full

Available endpoints:
  {', '.join(ENDPOINTS.keys())}
        '''
    )

    parser.add_argument(
        '--endpoint',
        default='students',
        choices=list(ENDPOINTS.keys()),
        help='API endpoint to test (default: students)'
    )

    parser.add_argument(
        '--key',
        required=True,
        help='MyJKKN API key (jk_xxxxx format)'
    )

    parser.add_argument(
        '--page',
        type=int,
        help='Page number (default: 1)'
    )

    parser.add_argument(
        '--limit',
        type=int,
        help='Items per page (default: 10)'
    )

    parser.add_argument(
        '--all',
        action='store_true',
        help='Fetch all records without pagination (staff endpoint only)'
    )

    parser.add_argument(
        '--search',
        help='Search query'
    )

    parser.add_argument(
        '--institution-id',
        help='Filter by institution ID'
    )

    parser.add_argument(
        '--department-id',
        help='Filter by department ID'
    )

    parser.add_argument(
        '--program-id',
        help='Filter by program ID'
    )

    parser.add_argument(
        '--full',
        action='store_true',
        help='Show full response data'
    )

    parser.add_argument(
        '--url',
        default=API_BASE_URL,
        help=f'API base URL (default: {API_BASE_URL})'
    )

    args = parser.parse_args()

    # Build params
    params = {}
    if args.page:
        params['page'] = args.page
    if args.limit:
        params['limit'] = args.limit
    if args.all:
        params['all'] = 'true'
    if args.search:
        params['search'] = args.search
    if args.institution_id:
        params['institution_id'] = args.institution_id
    if args.department_id:
        params['department_id'] = args.department_id
    if args.program_id:
        params['program_id'] = args.program_id

    # Run tests
    run_tests(args.endpoint, args.key, params, args.full)

    print()
    print_success("Test completed successfully!")
    print()
    print_info("Next steps:")
    print("  1. Use this API key in your application")
    print("  2. Refer to API documentation: .claude/skills/api-integration/references/")
    print("  3. Generate API client: python generate_api_client.py --framework nextjs --output ./lib/api")

if __name__ == '__main__':
    main()
