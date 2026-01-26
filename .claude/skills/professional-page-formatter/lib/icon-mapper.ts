export const ICON_MAP: Record<string, string> = {
  // Education
  'GraduationCap': 'graduation-cap',
  'BookOpen': 'book-open',
  'Book': 'book',
  'Award': 'award',
  'Certificate': 'award',

  // Building
  'Building': 'building',
  'Building2': 'building-2',
  'School': 'school',
  'Hospital': 'hospital',

  // Science
  'Microscope': 'microscope',
  'FlaskConical': 'flask-conical',
  'Dna': 'dna',

  // General
  'Star': 'star',
  'Heart': 'heart',
  'Users': 'users',
  'User': 'user'
}

export function getIconName(key: string): string {
  return ICON_MAP[key] || 'circle'
}

export function listIcons(): string[] {
  return Object.keys(ICON_MAP)
}
