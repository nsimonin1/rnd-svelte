<script>
  import notes from '../store/notes';

  let data = {
    title: "",
    category: "",
    content: "",
    id: null
  };
  let addNote = () => {    
    const newNote = {
      id: notes.length + 1,
      title: data.title,
      category: data.category,
      content: data.content
    };
    notes.addNote(newNote);

    data = {
      id: null,
      title: "",
      category: "",
      content: ""
    };

  }
</script>
<div>
    <div class="card p-2 shadow">
      <div class="card-body">
        <h5 class="card-title mb-4">Add New Note</h5>
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              bind:value={data.title}
              type="text"
              class="form-control"
              id="text"
              placeholder="Note Title" />
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select class="form-control" id="category"
             bind:value={data.category}>
              <option selected disabled>Selecet a category</option>
              <option value="School">School</option>
              <option value="Church">Church</option>
              <option value="Home">Home</option>
            </select>
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              bind:value={data.content}
              class="form-control"
              id="content"
              rows="3"
              placeholder="Note Content" />
          </div>
          <button type="submit" on:click|preventDefault={addNote} class="btn btn-primary">Add Note</button>
        </form>
      </div>
    </div>
</div>