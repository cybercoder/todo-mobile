import axios from './axios';

export const getTodoList = ({filter}) => axios.get(`/todo?filter=${filter}`);
export const getTodo = id => axios.get(`/todo/${id}`);
export const postTodo = data => axios.post('/todo/', data);
export const updateToDo = (id, data) => axios.put(`/todo/${id}`, data);
export const deleteToDo = id => axios.delete(`/todo/${id}`);
