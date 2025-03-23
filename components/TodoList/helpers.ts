import { TodoItem } from './interface';

/**
 * Generates a unique ID for a new todo item
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Filters todo items based on search query
 */
export const filterTodos = (todos: TodoItem[], query: string): TodoItem[] => {
  if (!query) return todos;
  const lowerCaseQuery = query.toLowerCase();
  return todos.filter(todo => todo.text.toLowerCase().includes(lowerCaseQuery));
};

/**
 * Creates a new todo item
 */
export const createTodo = (text: string): TodoItem => {
  return {
    id: generateId(),
    text,
    completed: false
  };
}; 