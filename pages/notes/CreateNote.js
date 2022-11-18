'use client';

import { useRouter } from "next/router";
import React, { useState } from 'react';


const createNote = async (note, refresh) => {
  try {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    refresh();
  } catch (err) {
    console.log('Error while creating notes', err);
  }
};
const CreateNote = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const router = useRouter();

  const handleChange = (
    e
  ) => {
    const newNote = {
      ...note,
      [e.target.name]: e.target.value,
    };
    setNote(newNote);
  };
  return (
    <div className="flex flex-col items-center">
      <h3 className="w-full text-center">Add your notes</h3>
      <div className="w-full max-w-xs mt-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title"
              name="title"
              value={note.title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Content"
              name="content"
              value={note.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => createNote(note, router.refresh)}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
