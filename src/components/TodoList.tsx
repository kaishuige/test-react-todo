import React, { useState } from 'react';
import { TodoItemType } from '../types/todo';
import TodoItemComponent from '../components/TodoItem';

const TodoList: React.FC = () => {

  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.map(todo => todo.completed ? { ...todo, completed: false } : todo));
  };

  const allCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Todo</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Create a new todo..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg"
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        {/* <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded-r">
          Add
        </button> */}
      </div>
      <ul className={todos.length ? 'bg-white rounded-lg shadow-md border border-gray-200' : ''}>
        {todos.map(todo => (
          <TodoItemComponent
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
        {
          todos.length > 0 && <li className='p-4'>
            <span className='mr-6'>{todos.length} itmes left</span>
            <span onClick={allCompleted} className='mr-6 cursor-pointer'>All Active Completed</span>
            <span onClick={clearCompleted} className='cursor-pointer'>Clear Completed</span>
          </li>
        }
      </ul>
    </div>
  );
};

export default TodoList;
