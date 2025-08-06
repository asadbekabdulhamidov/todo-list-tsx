import React from 'react';
import { Todo } from '../types';

interface TodoListsProps {
  todos: Todo[];
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
const TodoLists: React.FC<TodoListsProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow"
          >
            <div
              onClick={() => onToggle(todo.id!, !todo.completed)}
              className={`cursor-pointer select-none ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.title}
            </div>

            <button
              onClick={() => onDelete(todo.id!)}
              className="text-red-600 hover:text-red-800 font-bold"
            >
              ✕
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoLists;
