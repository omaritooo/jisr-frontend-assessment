import { useContextMenu } from '@/utils/providers/ContextMenuProvider'
import '@/assets/styles/components/menu.css'

function ContextMenu() {
  const { menuVisible, menuPosition, menuItems, hideMenu } = useContextMenu()
  if (!menuVisible)
    return
  return (
    <ul
      className="menu"
      style={{
        top: menuPosition.y,
        left: menuPosition.x,
      }}
      onClick={hideMenu}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            item.action()
            hideMenu()
          }}
          className="menu-item"
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default ContextMenu
