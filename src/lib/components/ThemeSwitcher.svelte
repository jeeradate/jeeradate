<script lang="ts">
    let theme = 'skeleton';
  
    function changeTheme(event: Event) {
      const newTheme = (event.target as HTMLSelectElement).value;
      document.documentElement.setAttribute('data-theme', newTheme);
      theme = newTheme;
    }
  </script>
  
  <select bind:value={theme} on:change={changeTheme}>
    <option value="skeleton">Skeleton</option>
    <option value="modern">Modern</option>
    <option value="crimson">Crimson</option>
  </select>