import { Pencil } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { NoteAlertDelete } from './note-alert-delete'
import { NoteDialogCreation } from './note-dialog-creation'
import { NoteDialogOpened } from './note-dialog-opened'

export function NoteCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <CardTitle>Meu título</CardTitle>
            <CardDescription>Criado em 22/02/2024</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <NoteDialogCreation
              buttonVariant="outline"
              dialogTitle="Editar nota"
              buttonIcon={<Pencil className="h-4 w-4" />}
            />
            <NoteAlertDelete />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="max-h-32 max-w-3xl overflow-hidden truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet
          sequi maxime harum deleniti officiis, accusantium libero perspiciatis
          ea autem corporis neque quidem, commodi tempore laborum magnam
          adipisci eveniet ipsum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus amet sequi maxime harum deleniti officiis,
          accusantium libero perspiciatis ea autem corporis neque quidem,
          commodi tempore laborum magnam adipisci eveniet ipsum?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minus amet sequi maxime
          harum deleniti officiis, accusantium libero perspiciatis ea autem
          corporis neque quidem, commodi tempore laborum magnam adipisci eveniet
          ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          amet sequi maxime harum deleniti officiis, accusantium libero
          perspiciatis ea autem corporis neque quidem, commodi tempore laborum
          magnam adipisci eveniet ipsum?
        </p>
      </CardContent>
      <CardFooter>
        <NoteDialogOpened />
      </CardFooter>
    </Card>
  )
}
