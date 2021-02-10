<script lang="ts">
  import type { Todo } from '../entities'

  export let todos: Todo[]
</script>

<ul>
  {#each todos as todo}
    <li>
      <input type="checkbox" bind:checked={todo.completed} />
      {todo.title}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>
