import {
  Home,
  Info,
  GraduationCap,
  Building2,
  FileText,
  Phone,
  Users,
  Target,
  MessageSquare,
  Award,
  School
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}

export interface MenuGroup {
  groupLabel: string;
  mainHref?: string; // Optional main page href for the group
  menus: MenuItem[];
}

export function getMobileNavLinks(pathname: string): MenuGroup[] {
  return [
    {
      groupLabel: 'Home',
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/'
        }
      ]
    },
    {
      groupLabel: 'About',
      mainHref: '/#about',
      menus: [
        {
          href: '/our-trust',
          label: 'Our Trust',
          icon: Users,
          active: pathname === '/our-trust'
        },
        {
          href: '/our-management',
          label: 'Our Management',
          icon: Building2,
          active: pathname === '/our-management'
        },
        {
          href: '/our-institutions',
          label: 'Our Institutions',
          icon: School,
          active: pathname === '/our-institutions'
        },
        {
          href: '/principals-message',
          label: "Principal's Message",
          icon: MessageSquare,
          active: pathname === '/principals-message'
        },
        {
          href: '/vision-mission',
          label: 'Vision & Mission',
          icon: Target,
          active: pathname === '/vision-mission'
        }
      ]
    },
    {
      groupLabel: 'Departments',
      mainHref: '/departments',
      menus: [
        {
          href: '/accident-emergency-care',
          label: 'Accident & Emergency Care',
          icon: GraduationCap,
          active: pathname === '/accident-emergency-care'
        },
        {
          href: '/cardiac-technology',
          label: 'Cardiac Technology',
          icon: GraduationCap,
          active: pathname === '/cardiac-technology'
        },
        {
          href: '/critical-care-technology',
          label: 'Critical Care Technology',
          icon: GraduationCap,
          active: pathname === '/critical-care-technology'
        },
        {
          href: '/dialysis-technology',
          label: 'Dialysis Technology',
          icon: GraduationCap,
          active: pathname === '/dialysis-technology'
        },
        {
          href: '/medical-record-science',
          label: 'Medical Record Science',
          icon: GraduationCap,
          active: pathname === '/medical-record-science'
        },
        {
          href: '/operation-theatre-anaesthesia',
          label: 'Operation Theatre & Anaesthesia',
          icon: GraduationCap,
          active: pathname === '/operation-theatre-anaesthesia'
        },
        {
          href: '/physician-assistant',
          label: 'Physician Assistant',
          icon: GraduationCap,
          active: pathname === '/physician-assistant'
        },
        {
          href: '/radiology-imaging-technology',
          label: 'Radiology & Imaging',
          icon: GraduationCap,
          active: pathname === '/radiology-imaging-technology'
        },
        {
          href: '/respiratory-therapy',
          label: 'Respiratory Therapy',
          icon: GraduationCap,
          active: pathname === '/respiratory-therapy'
        }
      ]
    },
    {
      groupLabel: 'Facilities',
      mainHref: '/facilities',
      menus: [
        {
          href: '/classroom',
          label: 'Class Room',
          icon: Building2,
          active: pathname === '/classroom'
        },
        {
          href: '/library',
          label: 'Library',
          icon: Building2,
          active: pathname === '/library'
        },
        {
          href: '/lab',
          label: 'Lab',
          icon: Building2,
          active: pathname === '/lab'
        },
        {
          href: '/food-court',
          label: 'Food Court',
          icon: Building2,
          active: pathname === '/food-court'
        },
        {
          href: '/hostel',
          label: 'Hostel',
          icon: Building2,
          active: pathname === '/hostel'
        },
        {
          href: '/ambulance-service',
          label: 'Ambulance Service',
          icon: Building2,
          active: pathname === '/ambulance-service'
        },
        {
          href: '/transport',
          label: 'Transport',
          icon: Building2,
          active: pathname === '/transport'
        },
        {
          href: '/wifi',
          label: 'Wi-Fi',
          icon: Building2,
          active: pathname === '/wifi'
        },
        {
          href: '/bank-post-office',
          label: 'Bank & Post Office',
          icon: Building2,
          active: pathname === '/bank-post-office'
        }
      ]
    },
    {
      groupLabel: 'Others',
      mainHref: '/others',
      menus: [
        {
          href: '/NAAC',
          label: 'NAAC',
          icon: Award,
          active: pathname === '/NAAC'
        },
        {
          href: '/privacy-policy',
          label: 'Privacy Policy',
          icon: FileText,
          active: pathname === '/privacy-policy'
        },
        {
          href: '/academic-calendar',
          label: 'Academic Calendar',
          icon: FileText,
          active: pathname === '/academic-calendar'
        }
      ]
    },
    {
      groupLabel: 'Contact',
      menus: [
        {
          href: '/contact',
          label: 'Contact Us',
          icon: Phone,
          active: pathname === '/contact'
        }
      ]
    }
  ];
}
