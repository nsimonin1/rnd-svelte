<script>
	import NoteCreate from "../note/NoteCreate.svelte";
	import Notes from "./Notes.svelte";
	let isEdit = false;


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
        <NoteCreate />
      </div>
      <div class="col-md-6">
				<Notes />         
      </div>
    </div>
  </div>
</section>