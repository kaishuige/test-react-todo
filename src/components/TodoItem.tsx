import React from 'react';
import { TodoItemType } from '../types/todo';

interface TodoItemProps {
  todo: TodoItemType;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className='p-4 border-b border-gray-300'>
      <div className="flex items-center">
        <div className="flex items-center mr-4 cursor">
          <input
            id={`todo-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-5 w-5 text-blue-600"
          />
        </div>
        <span
          className={`flex-grow truncate ${todo.completed ? 'line-through text-gray-500' : ''
            }`}
        >
          {todo.text}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
