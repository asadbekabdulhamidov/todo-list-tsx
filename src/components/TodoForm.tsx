// components/TodoForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Todo } from '../types';

interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>();

  const onSubmit = (data: Todo) => {
    onAdd({
      ...data,
      completed: false,
    });
    reset(); // formani tozalash
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 mb-1">
        <input
          type="text"
          placeholder="Yangi vazifa kiriting..."
          {...register('title', { required: true })}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Qo‘shish
        </button>
      </div>

      {errors.title && (
        <p className="text-red-500 t text-sm ">Sarlavha kiritilishi kerak</p>
      )}
    </form>
  );
};

export default TodoForm;
