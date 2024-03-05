import { useState } from 'react'

import { NoteCard } from '@/components/note-card'
import { NoteHeader } from '@/components/note-header'
import { NoteToolbar } from '@/components/note-toolbar'
import { Separator } from '@/components/ui/separator'

export interface NoteProps {
  id: string
  title: string
  description: string
}

export function Home() {
  const [notes, setNotes] = useState<NoteProps[]>([])

  function createNote(newNote: NoteProps) {
    setNotes((state) => {
      return [...state, newNote]
    })
  }

  function deleteNote(id: string) {
    const newNotes = notes.filter((note) => {
      return note.id !== id
    })

    setNotes(newNotes)
  }

  function updateNote(updateNote: NoteProps) {
    const newNotes = notes.map((note) => {
      if (note.id === updateNote.id) {
        note.title = updateNote.title
      }
      return note
    })

    setNotes(newNotes)
  }

  return (
    <main className="m-auto mt-20 flex max-w-screen-lg flex-col items-center justify-center px-5 antialiased">
      <NoteHeader />
      <NoteToolbar notes={notes} createNote={createNote} />
      <Separator className="mb-5" />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {notes.length > 0 ? (
          notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                nodeData={note}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            )
          })
        ) : (
          <p className="text-muted-foreground">Nenhuma nota cadastrada...</p>
        )}
      </div>
    </main>
  )
}
