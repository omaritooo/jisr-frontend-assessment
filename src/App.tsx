import Sidebar from '@/components/common/Sidebar'
import Files from './constants/files'
import { TreeItem } from './features/tree/TreeItem'
import { useContextMenu } from './utils/providers/ContextMenuProvider'
import './App.css'

function App() {
  const { hideMenu } = useContextMenu()

  return (
    <div onClick={hideMenu}>
      <Sidebar>
        <Sidebar.Header>
          Header
        </Sidebar.Header>
        <Sidebar.Content>
          {Files.data.map((item, index) => (
            <TreeItem
              key={`${item.name}-${index}`}
              item={item}
            />
          ))}
        </Sidebar.Content>
        <Sidebar.Footer>
          Footer
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

export default App
