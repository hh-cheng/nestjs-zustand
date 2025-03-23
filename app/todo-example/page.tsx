'use client';

import { useState } from 'react';
import { TodoList } from '@/components/TodoList';
import { TodoItem } from '@/components/TodoList/interface';

export default function TodoExamplePage() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: '任务一', completed: true },
    { id: '2', text: '任务二', completed: true },
    { id: '3', text: '任务三', completed: false },
    { id: '4', text: '任务四', completed: false },
  ]);

  const handleToggle = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleAdd = (text: string) => {
    const newTodo: TodoItem = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Todo Example</h1>
      <TodoList
        items={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
} 