<script lang="ts">
  import type { Todo } from '../entities'

  export let todos: Todo[]
  $: orderedTodos = [...todos].reverse()

  $: completedTodos = todos.filter(t => t.completed)
  $: numIncomplete = todos.length - completedTodos.length

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

{#if numIncomplete > 0}
  <div class="num-incomplete">
    {numIncomplete}
    {numIncomplete === 1 ? 'todo' : 'todos'} to complete
  </div>
{/if}

{#if completedTodos.length > 0}
  <button on:click={clearCompleted}>Clear completed</button>
{/if}

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  .num-incomplete {
    font-style: italic;
  }

  button {
    margin-top: 8px;
  }
</style>
