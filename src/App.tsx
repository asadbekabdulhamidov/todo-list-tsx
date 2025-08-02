import TodoForm from './components/TodoForm';
import React from 'react';
import { Todo } from './types';

const App: React.FC = () => {
  const handleTodo = (todo: Todo) => {
    console.log('yangi todo', todo);
    // Bu yerga keyinchalik zustand/store/json-server orqali qo‘shish yoziladi
  };
  return (
    <div className="container mt-20">
      <div className="w-full max-w-[800px] mx-auto">
        <TodoForm onAdd={handleTodo} />
      </div>
    </div>
  );
};

export default App;
