import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getToDoAction} from '../../redux/actions';
import {useRoute, useNavigation} from '@react-navigation/core';
import {StyleSheet} from 'react-native';

export default function ToDo(): any {
  const navigation = useNavigation();
  const {
    params: {id},
  } = useRoute();

  const [todoInfo, setTodoInfo] = useState();
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getToDoAction(id)).then(data => {
      setTodoInfo(data);
      setIsLoading(false);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (!todoInfo) {
      return;
    }
    navigation.setOptions({title: `${todoInfo?.title} #${todoInfo?.id}`});
  }, [navigation, todoInfo]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todoInfo?.title?.toUpperCase()}</Text>
      <Text style={styles.body}>{todoInfo?.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#D43BB2',
    fontSize: 20,
  },
  body: {
    fontSize: 18,
  },
});
