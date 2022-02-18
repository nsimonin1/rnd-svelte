<script>
  import notes from '../store/notes';

  const editNote = note => {		
    notes.editNote(note);
	}
</script>

{#each  $notes as note}
  <div class="card mb-3">
    <div class="card-header">{note.category}</div>
    <div class="card-body">
      <h5 class="card-title">{note.title}</h5>
      <p class="card-text">{note.content}</p>
      <button class="btn btn-info" on:click={editNote(note)}>Edit</button>
      <button class="btn btn-danger" on:click={notes.deleteNote(note.id)}>Delete</button>
    </div>
  </div>
{/each}