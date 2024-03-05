import { Pencil } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { NoteProps } from '@/pages/home'

import { NoteAlertDelete } from './note-alert-delete'
import { NoteDialogCreation } from './note-dialog-creation'
import { NoteDialogOpened } from './note-dialog-opened'

interface NoteCardProps {
  nodeData: NoteProps
  updateNote: (note: NoteProps) => void
  deleteNote: (id: string) => void
}

export function NoteCard({ nodeData, updateNote, deleteNote }: NoteCardProps) {
  return (
    <Card id={nodeData.id} className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <CardTitle>{nodeData.title}</CardTitle>
            <CardDescription>Criado em 22/02/2024</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <NoteDialogCreation
              buttonVariant="outline"
              dialogTitle="Editar nota"
              buttonIcon={<Pencil className="h-4 w-4" />}
              updateNote={updateNote}
              noteData={nodeData}
            />
            <NoteAlertDelete id={nodeData.id} deleteNote={deleteNote} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="max-h-32 max-w-3xl overflow-hidden truncate">
          {nodeData.description}
        </p>
      </CardContent>
      <CardFooter>
        <NoteDialogOpened />
      </CardFooter>
    </Card>
  )
}
