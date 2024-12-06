import type { ReactNode } from 'react'
import '@/assets/styles/components/sidebar.css'

interface Props {
  children: ReactNode
}

interface SectionProps {
  children?: ReactNode
}

function Sidebar({ children }: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">{children}</div>
    </aside>
  )
}

Sidebar.Header = function Header({ children }: SectionProps) {
  return <div className="sidebar-header">{children}</div>
}

Sidebar.Content = function Content({ children }: SectionProps) {
  return <div className="sidebar-content">{children}</div>
}

Sidebar.Footer = function Footer({ children }: SectionProps) {
  return <div className="sidebar-footer">{children}</div>
}

export default Sidebar
