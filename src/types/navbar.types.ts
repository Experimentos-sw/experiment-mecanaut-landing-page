export interface NavItem {
  text: string
  href: string
  isActive: boolean
}

export interface Language {
  code: string
  text: string
  isActive: boolean
}

export interface ButtonConfig {
  text: string
  href?: string
  ariaLabel: string
  onClick: () => void
}
