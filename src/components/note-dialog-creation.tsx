import { Check, LucideProps } from 'lucide-react'

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

interface NoteProps {
  title: string
  description: string
}

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
  noteData?: NoteProps
}

export function NoteDialogCreation({
  buttonVariant,
  buttonIcon,
  dialogTitle,
  noteData,
}: NoteDialogCreationProps) {
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
          <Input placeholder="Título da nota..." maxLength={40} />
          <Textarea
            className="min-h-36 resize-none"
            placeholder="Escreva sua nota..."
            id="note"
            value={noteData?.description}
          />
          <Button variant="default">
            <Check className="mr-2 h-4 w-4" />
            Salvar nota
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
