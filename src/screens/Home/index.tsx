import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoListAction} from '../../redux/actions';
export default function Home(): any {
  const dispatch = useDispatch();

  const {todo}: any = useSelector(state => state);
  useEffect(() => {
    dispatch(getTodoListAction());
  }, [dispatch]);

  return (
    <View>
      <Text>{JSON.stringify(todo)}</Text>
    </View>
  );
}
