type FileType = 'file' | 'folder'
type FileExtension = 'js' | 'ts' | 'html' | 'img' | 'svg'

interface FileItem {
  type: 'file' | 'folder'
  name: string
  meta?: string
  data?: FileItem[]
}

type FileSystemItem = FileTab | FolderTab

interface RootFileSystem {
  type: 'folder'
  name: string
  data: FileItem[]
}
