<script lang="ts">
  import TodoList from './components/TodoList.svelte'
  import AddTodoForm from './components/AddTodoForm.svelte'
  import type { Todo } from './entities'

  let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')

  $: localStorage.setItem('todos', JSON.stringify(todos))
</script>

<main>
  <div class="container">
    <h1>Todos</h1>
    <AddTodoForm bind:todos />
    <TodoList bind:todos />
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font: 16px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #132c3c;
    color: white;
  }

  main {
    padding-top: 16px;
  }

  h1 {
    margin-top: 0;
  }

  .container {
    border: 1px solid greenyellow;
    border-radius: 8px;
    width: 420px;
    margin: auto;
    padding: 34px;
  }
</style>
