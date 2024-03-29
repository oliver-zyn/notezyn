import { FilterX, NotepadText } from 'lucide-react'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    loadNotesFromLocalStorage()
  }, [])

  function createNote(newNote: NoteProps) {
    setNotes((state) => {
      const newNotes = [...state, newNote]
      saveNotesToLocalStorage(newNotes)
      return newNotes
    })
  }

  function deleteNote(id: string) {
    const newNotes = notes.filter((note) => {
      return note.id !== id
    })

    setNotes(newNotes)
    saveNotesToLocalStorage(newNotes)
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
    saveNotesToLocalStorage(newNotes)
  }

  function filterNotes() {
    return notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(filterText.toLowerCase()) ||
        note.description.toLowerCase().includes(filterText.toLowerCase())
      )
    })
  }

  function saveNotesToLocalStorage(notes: NoteProps[]) {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
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
            title="Você ainda não tem notas cadastradas"
            subtitle="Crie notas e organize suas anotações"
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
