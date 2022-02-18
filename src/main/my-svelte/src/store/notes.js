import { writable } from 'svelte/store';

const NOTES = [
  {
    id: 1,
    title: "Sweetest framework ever",
    category: "Church",
    content: "This is the content of this note"
  },
  {
    id: 2,
    title: "intro to svelt",
    category: "School",
    content:
      "This could be an intro to svelt,so you need to keep calm and see the magic"
  }
]; 

const { subscribe, set, update } = writable(NOTES);

const addNote = note => update(notes => {
  return [...notes, note];
});

const editNote = note => update(notes => {
  const updatedNotes = notes.map(current => (current.id === note.id ? {...current, title: note.title }: current));
  return updatedNotes;
})

const deleteNote = id => update(notes => {
  const updatedNotes = notes.filter(note => note.id !== id);
  return updatedNotes;
});

const reset = () => {
  set(NOTES);
};

export default {
  subscribe, 
  addNote, 
  reset, 
  editNote,
  deleteNote
}