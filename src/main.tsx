import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ContextMenu from './components/common/ContextMenu.tsx'
import { ContextMenuProvider } from './utils/providers/ContextMenuProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextMenuProvider>
      <App />
      <ContextMenu />
    </ContextMenuProvider>
  </StrictMode>,
)
