<script lang="ts">
  import type { TodoFilter } from '../entities'
  export let filterValue: TodoFilter
</script>

<div>
  <label>
    <input type="radio" bind:group={filterValue} value="all" />
    All
  </label>

  <label>
    <input type="radio" bind:group={filterValue} value="completed" />
    Completed
  </label>

  <label>
    <input type="radio" bind:group={filterValue} value="incomplete" />
    Incomplete
  </label>
</div>

<style>
  label {
    display: inline-block;
  }

  label:not(:last-child) {
    margin-right: 12px;
  }
</style>
