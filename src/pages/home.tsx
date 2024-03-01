import { NoteCard } from '@/components/note-card'
import { NoteHeader } from '@/components/note-header'
import { NoteToolbar } from '@/components/note-toolbar'

export function Home() {
  return (
    <main className="m-auto mt-20 flex max-w-screen-lg flex-col items-center justify-center px-5 antialiased">
      <NoteHeader />
      <NoteToolbar />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </main>
  )
}
