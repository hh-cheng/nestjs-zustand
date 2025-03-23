import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from './TodoList';
import { TodoItem } from './interface';

const meta: Meta<typeof TodoList> = {
  title: 'Components/TodoList',
  component: TodoList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onToggle: { action: 'toggled' },
    onDelete: { action: 'deleted' },
    onAdd: { action: 'added' },
    onSearch: { action: 'searched' },
  },
};

export default meta;
type Story = StoryObj<typeof TodoList>;

const sampleTodos: TodoItem[] = [
  { id: '1', text: '任务一', completed: true },
  { id: '2', text: '任务二', completed: true },
  { id: '3', text: '任务三', completed: false },
  { id: '4', text: '任务四', completed: false },
];

export const Default: Story = {
  args: {
    items: [],
  },
};

export const WithTasks: Story = {
  args: {
    items: sampleTodos,
  },
};

export const WithCompletedTasks: Story = {
  args: {
    items: sampleTodos.map(todo => ({ ...todo, completed: true })),
  },
}; 