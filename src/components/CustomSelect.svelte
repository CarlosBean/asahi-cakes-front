<script lang="ts">
  export let label: string;
  export let options: any[];
  export let selected = undefined;
</script>

<style>
  .dropdown-container {
    border: 1px solid lightgray;
    border-radius: 4px;
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    margin: 0 0.5em 1em 0;
  }

  .dropdown-container label {
    display: inline-block;
  }

  .dropdown-container select {
    border: none;
    padding: 0;
    outline: 0;
    margin: 0;
    height: 30px;
    cursor: pointer;
  }
</style>

<span class="dropdown-container">
  <label for="dropdown">{label}: </label>
  <select name="dropdown" class="capitalize" bind:value={selected}>
    {#each options as option, index}
      {#if option}
        <option value={option}>{option.name}</option>
      {:else}
        <option value={index + 1}>{index + 1}</option>
      {/if}
    {/each}
  </select>
</span>
