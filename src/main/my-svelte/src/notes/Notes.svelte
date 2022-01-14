<script>
  export let notes;
  export let deleteNote;
  export let editNote;
</script>

{#each  notes as note}
  <div class="card mb-3">
    <div class="card-header">{note.category}</div>
    <div class="card-body">
      <h5 class="card-title">{note.title}</h5>
      <p class="card-text">{note.content}</p>
      <button class="btn btn-info" on:click={editNote(note)}>Edit</button>
      <button class="btn btn-danger" on:click={deleteNote(note.id)}>Delete</button>
    </div>
  </div>
{/each}