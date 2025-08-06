import api from '../api/axios';
import { Todo } from '../types';

export const getTodos = async (): Promise<[]> => {
  const response = await api.get('/todos');
  return response.data;
};
