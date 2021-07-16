import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoListAction} from '../../redux/actions';
import TodoList from './todoList';

export default function Home(): any {
  const dispatch: Promise = useDispatch();
  const [loading, showLoading] = useState(false);
  const {todo}: any = useSelector(state => state);

  useEffect(() => {
    showLoading(true);
    dispatch(getTodoListAction()).then(() => showLoading(false));
  }, [dispatch]);

  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}>
      {loading ? <Text>Loading...</Text> : <TodoList data={todo} />}
    </View>
  );
}
