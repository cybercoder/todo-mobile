import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoListAction} from '../../redux/actions';
import TodoList from './todoList';
import Filter from './Filter';

export default function Home(): any {
  const dispatch = useDispatch();
  const [loading, showLoading] = useState(false);
  const {todo}: any = useSelector(state => state);
  const [filter, setFilter] = useState();

  const fetchTodosAndUpdateStore = useCallback(() => {
    showLoading(true);
    dispatch(getTodoListAction(filter)).then(() => showLoading(false));
  }, [dispatch, filter]);

  useEffect(() => {
    fetchTodosAndUpdateStore();
  }, [fetchTodosAndUpdateStore]);

  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingTop: 10,
        flex: 1,
      }}>
      <Filter onFilterPress={useCallback(f => setFilter(f), [])} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <TodoList data={todo} onFilterPress={setFilter} />
      )}
    </View>
  );
}
