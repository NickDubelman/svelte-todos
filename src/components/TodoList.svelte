<script lang="ts">
  import type { Todo } from '../entities'

  export let todos: Todo[]
  $: orderedTodos = [...todos].reverse()

  const clearCompleted = () => {
    todos = todos.filter(t => !t.completed)
  }
</script>

<ul>
  {#each orderedTodos as todo}
    <li>
      <input type="checkbox" bind:checked={todo.completed} />
      {todo.title}
    </li>
  {/each}
</ul>

{#if todos.filter(t => t.completed).length > 0}
  <button on:click={clearCompleted}>Clear completed</button>
{/if}

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>
