<script lang="ts">
  import NameCard from "$lib/components/NameCard.svelte";
    // Define a reactive variable for the class
    let isActive: boolean = true;

// Function to toggle the class
function toggleActive() {
  isActive = !isActive;
}
</script>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <img class="size-12" src="favicon.png" alt="ChitChat Logo">
      
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  <div>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="green" />
      Sorry, your browser does not support inline SVG.
    </svg> 

</div>
  
  <div>
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="red" />
      Sorry, your browser does not support inline SVG.
    </svg> 
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="Yellow" />
      Sorry, your browser does not support inline SVG.
    </svg> 
    <a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 ...">
      Inspiration
    </a>
    <a href="/your-target-page" class="btn btn-primary">
      Click Me
    </a>
    <a href="/your-target-page" class="btn btn-primary text-black bg-yellow-500 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-lg" target="_blank">
      Click Me
    </a>
    <a href="/your-target-page" class="btn variant-filled-primary">
      Click Me
    </a>
    <a href="/your-target-page" class="btn btn-primary hover:bg-blue-700 px-4 py-2 rounded-lg">
      Click Me
    </a>

<div class="flex m-7">

  <NameCard Name=" jeeradate Kaowkanchana  " PicUrl= "BoyFace.png" />
  <NameCard Name=" jeeradate Kaowkanchana  " PicUrl= "BoyFace.png" Position='IT engineer' />
  <NameCard Name=" jeeradate Kaowkanchana  " PicUrl= "LadyFace.png" />
  <NameCard Name=" jeeradate Kaowkanchana  " PicUrl= "BoyFace.png" Position='IT engineer' />
  <NameCard Name=" jeeradate Kaowkanchana  " PicUrl= "BoyFace.png" />
  
</div>
</div>

  <div class="p-4 bg-gray-100 rounded shadow hover:bg-black">
    <button
      class={`btn ${isActive ? 'bg-blue-500' : 'bg-gray-500'} text-white`}
      on:click={toggleActive}
    >
      Toggle Active
    </button>
  </div>
