export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  /**
   * Initial todo items
   */
  items?: TodoItem[];
  /**
   * Callback when a todo item is toggled
   */
  onToggle?: (id: string) => void;
  /**
   * Callback when a todo item is deleted
   */
  onDelete?: (id: string) => void;
  /**
   * Callback when a new todo item is added
   */
  onAdd?: (text: string) => void;
  /**
   * Callback when searching for todo items
   */
  onSearch?: (query: string) => void;
} 