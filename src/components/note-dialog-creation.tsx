import { Check, LucideProps } from 'lucide-react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { NoteProps } from '@/pages/home'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface NoteDialogCreationProps {
  buttonVariant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  buttonIcon: LucideProps
  dialogTitle: string
  createNote?: (note: NoteProps) => void
  updateNote?: (note: NoteProps) => void
  noteData?: NoteProps
}

export function NoteDialogCreation({
  buttonVariant,
  buttonIcon,
  dialogTitle,
  createNote,
  updateNote,
  noteData,
}: NoteDialogCreationProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  function handleSaveNote() {
    if (!title) {
      alert('Titulo nao pode ser vazio')
      return
    }

    if (!description) {
      alert('Descrição nao pode ser vazio')
      return
    }

    const newNote = {
      id: noteData ? noteData.id : uuid(),
      title,
      description,
    }

    if (noteData) {
      updateNote!(newNote)
    } else {
      createNote!(newNote)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size="icon">
          <>{buttonIcon}</>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="mb-3">{dialogTitle}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input
            placeholder="Título da nota..."
            maxLength={40}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            className="min-h-36 resize-none"
            placeholder="Escreva sua nota..."
            id="note"
            value={noteData?.description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="default" onClick={handleSaveNote}>
            <Check className="mr-2 h-4 w-4" />
            Salvar nota
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
