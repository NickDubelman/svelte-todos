export interface Todo {
  title: string
  completed: boolean
}

export type TodoFilter = 'all' | 'completed' | 'incomplete'
