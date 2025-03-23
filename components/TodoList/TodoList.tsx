'use client';

import { useState, useEffect } from 'react';
import { TodoListProps, TodoItem } from './interface';
import { createTodo, filterTodos } from './helpers';
import { cn } from '@/lib/utils';

export function TodoList({
  items: initialItems = [],
  onToggle,
  onDelete,
  onAdd,
  onSearch
}: TodoListProps) {
  const [items, setItems] = useState<TodoItem[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  
  // Update internal state when props change
  useEffect(() => {
    if (initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const handleToggle = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    if (onToggle) onToggle(id);
  };

  const handleDelete = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    if (onDelete) onDelete(id);
  };

  const handleAdd = () => {
    if (!newTodoText.trim()) return;
    
    const newTodo = createTodo(newTodoText);
    setItems(prevItems => [...prevItems, newTodo]);
    setNewTodoText('');
    if (onAdd) onAdd(newTodoText);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  // Filter items based on search query
  const filteredItems = filterTodos(items, searchQuery);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">任务管理面板</h1>
      
      <div className="flex items-center mb-6 gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            className="h-10 w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="请输入任务进行搜索"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        
        <button
          className="h-10 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {
            setNewTodoText('');
            document.getElementById('new-todo-input')?.focus();
          }}
        >
          新增任务
        </button>
      </div>
      
      <div className="space-y-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
                className="h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className={cn(
                "ml-3 text-gray-700",
                item.completed && "line-through text-gray-400"
              )}>
                {item.text}
              </span>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
        
        {/* New todo input */}
        <div className="flex items-center mt-4 p-4 bg-white border border-gray-200 rounded-md">
          <input
            id="new-todo-input"
            type="text"
            className="flex-1 border-none focus:outline-none focus:ring-0"
            placeholder="输入新任务..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAdd();
            }}
          />
          <button
            onClick={handleAdd}
            className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            添加
          </button>
        </div>
      </div>
    </div>
  );
} 