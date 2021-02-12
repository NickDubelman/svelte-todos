<script lang="ts">
  import type { Todo, TodoFilter } from '../entities'
  import TodoFilters from './TodoFilters.svelte'

  export let todos: Todo[]

  let filterValue: TodoFilter = 'all'

  $: filteredTodos = todos.filter(todo => {
    switch (filterValue) {
      case 'all':
        return true
      case 'completed':
        return todo.completed
      case 'incomplete':
        return !todo.completed
    }
  })

  $: orderedTodos = filteredTodos.reverse()

  $: completedTodos = todos.filter(t => t.completed)
  $: numIncomplete = todos.length - completedTodos.length

  const clearCompleted = () => {
    todos = todos.filter(t => !t.completed)
  }
</script>

<TodoFilters bind:filterValue />

<ul>
  {#each orderedTodos as todo}
    <li>
      <input type="checkbox" bind:checked={todo.completed} />
      {todo.title}
    </li>
  {/each}
</ul>

<div class="num-incomplete">
  {#if numIncomplete > 0}
    {numIncomplete}
    {numIncomplete === 1 ? 'todo' : 'todos'} to complete
  {:else if todos.length > 0}
    All todos are completed!
  {/if}
</div>

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
