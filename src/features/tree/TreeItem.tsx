/* eslint-disable no-console */
import { useContextMenu } from '@/utils/providers/ContextMenuProvider'
import { useState } from 'react'
import './tree.css'

interface Props {
  item: FileItem
  depth?: number
}

export function TreeItem({ item, depth = 0 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const getFileIcon = (meta: FileExtension) => {
    const iconMap = {
      js: '📄',
      ts: '📘',
      html: '🌐',
      img: '🖼️',
      svg: '🔷',
    }
    return iconMap[meta] || '📄'
  }

  const { showMenu, hideMenu } = useContextMenu()

  const handleRightClick = (event: React.MouseEvent) => {
    showMenu(event, [
      { label: 'Edit', action: () => console.log('Edit selected') },
      { label: 'Delete', action: () => console.log('Delete selected') },
      { label: 'Copy', action: () => console.log('Copy selected') },
    ])
  }

  if (item.type === 'file') {
    return (
      <div
        onContextMenu={handleRightClick}
        style={{
          paddingLeft: `${depth * 10}px`,
        }}
        className="file"
      >
        <span style={{ marginLeft: `${depth * 10}px` }}>
          {getFileIcon(item.meta as FileExtension)}
        </span>
        {item.name}
      </div>
    )
  }

  return (
    <div
      onContextMenu={handleRightClick}
      onClick={hideMenu}
    >
      <div
        style={{
          paddingLeft: `${depth * 10}px`,
        }}
        className="folder"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span style={{ marginLeft: `${depth * 10}px` }}>
          {isExpanded ? '📂' : '📁'}
        </span>
        {item.name}
      </div>
      {isExpanded && item?.data?.map((item, index) => (
        <TreeItem
          key={`${item.name}-${index}`}
          item={item}
          depth={depth + 1}
        />
      ))}
    </div>
  )
}
