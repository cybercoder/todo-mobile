import axios from './axios';

export const getTodoList = () => axios.get('/todo');
