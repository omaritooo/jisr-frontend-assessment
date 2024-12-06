import React, { createContext, useCallback, useContext, useState } from 'react'

interface MenuItem {
  label: string
  action: () => void
}

interface ContextMenuState {
  menuVisible: boolean
  menuPosition: { x: number, y: number }
  menuItems: MenuItem[]
  showMenu: (event: React.MouseEvent, items: MenuItem[]) => void
  hideMenu: () => void
}

const ContextMenuContext = createContext<ContextMenuState | undefined>(undefined)

export function ContextMenuProvider({ children }: { children: React.ReactNode }) {
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

  const showMenu = useCallback((event: React.MouseEvent, items: MenuItem[]) => {
    if (event.button !== 2)
      return
    event.preventDefault()
    setMenuPosition({ x: event.pageX, y: event.pageY })
    setMenuItems(items)
    setMenuVisible(true)
  }, [])

  const hideMenu = useCallback(() => {
    setMenuVisible(false)
  }, [])

  return (
    <ContextMenuContext.Provider
      value={{ menuVisible, menuPosition, menuItems, showMenu, hideMenu }}
    >
      {children}
    </ContextMenuContext.Provider>
  )
}

export function useContextMenu() {
  const context = useContext(ContextMenuContext)
  if (!context) {
    throw new Error('Usage error.')
  }
  return context
}
