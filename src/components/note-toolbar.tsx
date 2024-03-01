import { Plus, Search } from 'lucide-react'

import { NoteDialogCreation } from './note-dialog-creation'
import { Input } from './ui/input'

export function NoteToolbar() {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <div className="relative flex items-center justify-end">
        <Input placeholder="Buscar nota..." className="w-full pr-9" />
        <Search className="absolute mr-3 h-4 w-4" />
      </div>
      <NoteDialogCreation
        buttonVariant="default"
        dialogTitle="Nova nota"
        buttonIcon={<Plus className="h-4 w-4" />}
      />
    </div>
  )
}
