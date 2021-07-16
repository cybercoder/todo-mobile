import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoListAction} from '../../redux/actions';
import TodoList from './todoList';
export default function Home(): any {
  const dispatch = useDispatch();

  const {todo}: any = useSelector(state => state);
  useEffect(() => {
    dispatch(getTodoListAction());
  }, [dispatch]);

  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      <TodoList data={todo} />
    </View>
  );
}
