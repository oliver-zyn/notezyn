import { ArrowDownToLine, ArrowUpRightFromSquare, Copy } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from './ui/button'

export function NoteDialogOpened() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          <ArrowUpRightFromSquare className="mr-2 h-4 w-4" />
          Abrir nota
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[650px] overflow-hidden">
        <DialogHeader>
          <div className="space-y-2">
            <DialogTitle>Sua nota</DialogTitle>
            <DialogDescription>
              Atualizada pela última vez 24/11/2023
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="max-h-[400px] w-full overflow-scroll overflow-x-auto rounded-lg border bg-zinc-100 p-4 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold">Titulo</h2>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ipsam quod est nesciunt alias expedita fugit vitae eos temporibus
            neque. Veritatis nulla eveniet voluptas fugit quasi fugiat minus sit
            ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum ipsam quod est nesciunt alias expedita fugit vitae eos
            temporibus neque. Veritatis nulla eveniet voluptas fugit quasi
            fugiat minus sit ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum ipsam quod est nesciunt alias expedita
            fugit vitae eos temporibus neque. Veritatis nulla eveniet voluptas
            fugit quasi fugiat minus sit ipsam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum ipsam quod est nesciunt alias
            expedita fugit vitae eos temporibus neque. Veritatis nulla eveniet
            voluptas fugit quasi fugiat minus sit ipsam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum ipsam quod est nesciunt
            alias expedita fugit vitae eos temporibus neque. Veritatis nulla
            eveniet voluptas fugit quasi fugiat minus sit ipsam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nostrum ipsam quod est
            nesciunt alias expedita fugit vitae eos temporibus neque. Veritatis
            nulla eveniet voluptas fugit quasi fugiat minus sit ipsam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam
            quod est nesciunt alias expedita fugit vitae eos temporibus neque.
            Veritatis nulla eveniet voluptas fugit quasi fugiat minus sit ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ipsam quod est nesciunt alias expedita fugit vitae eos temporibus
            neque. Veritatis nulla eveniet voluptas fugit quasi fugiat minus sit
            ipsam.
          </p>
        </div>
        <div className="space-x-3">
          <Button variant="default" className="max-w-40">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Baixar nota
          </Button>
          <Button variant="secondary" className="max-w-40">
            <Copy className="mr-2 h-4 w-4" />
            Copiar nota
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
