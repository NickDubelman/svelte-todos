<script lang="ts">
  import type { Todo } from '../entities'

  export let todos: Todo[]

  let inputValue: string = ''

  const onSubmit = (e: Event) => {
    e.preventDefault()

    todos = [...todos, { title: inputValue, completed: false }] // add todo
    inputValue = '' // reset input
  }
</script>

<form on:submit={onSubmit}>
  <input placeholder="what do you need to do?" bind:value={inputValue} />
  <button type="submit">Add Todo</button>
</form>

<style>
  form {
    display: flex;
    align-items: baseline;
  }

  input {
    width: 324px;
  }
</style>
