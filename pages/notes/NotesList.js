import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from "react-query";
import prisma from '../../lib/prisma';

export default function NotesList(props) {
  const [notes,setNotes]=useState([])
  const { data, isLoading } = useQuery(
    ["notes"],
    async () =>
   fetch('/api/notes', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(async (result) => {
      setNotes(await result.json())}),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  
if(isLoading) return (<h1>....Loading</h1>)
  return (
    <>
      <h1 className="text-3xl m-10 font-bold ">
        {notes?.map((note) => (
           <div key={note.id}>
          <p className="p-4 align-center" >
            <Link href={`/notes/${note.id}`}>
             
              <p>{note.completed ? '✔️' : '❌'} {note.title.toString().toUpperCase()}</p>
         
            </Link>
          </p>
          </div>
        ))}
      </h1>
    </>
  );
}


export async function getServerSideProps() {
  const notes = await prisma.note.findMany();
  return {
    props: {
      notes: notes,
    },
  };
}
