import { FilterX, NotepadText } from 'lucide-react'
import { useState } from 'react'

import { NoteCard } from '@/components/note-card'
import { NoteHeader } from '@/components/note-header'
import { NoteListMessage } from '@/components/note-list-msg'
import { NoteToolbar } from '@/components/note-toolbar'
import { Separator } from '@/components/ui/separator'

export interface NoteProps {
  id: string
  title: string
  description: string
  created_at?: Date
  updated_at?: Date
}

export function Home() {
  const [notes, setNotes] = useState<NoteProps[]>([])
  const [filterText, setFilterText] = useState<string>('')

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
        note.description = updateNote.description
        note.updated_at = updateNote.updated_at
      }
      return note
    })

    setNotes(newNotes)
  }

  function filterNotes() {
    return notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(filterText.toLowerCase()) ||
        note.description.toLowerCase().includes(filterText.toLowerCase())
      )
    })
  }

  return (
    <main className="m-auto mb-5 mt-20 flex max-w-screen-lg flex-col items-center justify-center px-5 antialiased">
      <NoteHeader />
      <NoteToolbar
        notes={notes}
        createNote={createNote}
        onFilterChange={setFilterText}
      />
      <Separator className="mb-5" />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {notes.length === 0 ? (
          <NoteListMessage
            title="Você ainda não tem tarefas cadastradas"
            subtitle="Crie tarefas e organize seus itens a fazer"
            icon={<NotepadText className="h-14 w-14" />}
          />
        ) : filterNotes().length > 0 ? (
          filterNotes().map((note) => (
            <NoteCard
              key={note.id}
              noteData={note}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <NoteListMessage
            title="Nenhuma nota encontrada"
            subtitle="Experimente alterar o filtro ou criar uma nova nota"
            icon={<FilterX className="h-14 w-14" />}
          />
        )}
      </div>
    </main>
  )
}
