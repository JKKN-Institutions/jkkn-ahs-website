export interface StyleProps {
  color?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  borderRadius?: string
  border?: string
  boxShadow?: string
  fontSize?: string
  fontWeight?: number
  [key: string]: any
}

export function buildStyles(props: StyleProps): Record<string, any> {
  const styles: Record<string, any> = {}

  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined) {
      styles[key] = value
    }
  }

  return styles
}

export function mergeStyles(...styleSets: StyleProps[]): StyleProps {
  return Object.assign({}, ...styleSets)
}

export function addHoverStyles(base: StyleProps, hover: StyleProps): StyleProps {
  return {
    ...base,
    ':hover': hover
  }
}
