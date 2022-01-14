<script>
	import NoteCreate from "./note/NoteCreate.svelte";
	import Notes from "./notes/Notes.svelte";
	let isEdit = false;
	let notes = [
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
	const addNewNote =(note) => {
		notes = notes.concat(note);
	};

	const deleteNote = id => {
		notes = notes.filter(note => note.id !== id);
	};

	const editNote = note => {
		isEdit = true;
		console.log(note);
	}
</script>

<style>
	 @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
  * {
    font-family: "Nunito", sans-serif;
  }
</style>

<section>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <NoteCreate {notes} {addNewNote} />
      </div>
      <div class="col-md-6">
				<Notes notes={notes} {deleteNote} {editNote} />         
      </div>
    </div>
  </div>
</section>
