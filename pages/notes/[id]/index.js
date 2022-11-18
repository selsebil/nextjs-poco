import { useRouter } from "next/router";
import React, { useState } from 'react';
import { useQuery } from "react-query";

export default function Note() {
  const route = useRouter()
  const [note,setNote]=useState('')
  const id = route.query.id
  const { data, isLoading } = useQuery(
    ["note"],
    async () =>
    await fetch(`/api/notes?id=${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(async (result) => {
      setNote(await result.json())}),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  
if(isLoading) return (<h1>....Loading</h1>)
  return (
    <>
      <div className="p-10 bg-white-50 border-2 m-2 shadow-lg">
        <div>
          <p>Title: {note?.title}</p>
          <p>Description: {note?.content}</p>
          <p>Completed: {note?.completed ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </>
  );
}
