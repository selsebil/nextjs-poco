import CreateNote from './CreateNote';
import NotesList from './NotesList';
export default function Notes()  {
  return (
    <main className="flex-col items-center">
      <h1 className="text-center font-bold text-lg">Completed Notes: </h1>
        <NotesList />  
        <CreateNote />
    </main>
  );
}

