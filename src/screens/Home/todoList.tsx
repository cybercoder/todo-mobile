import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {todoTypes} from './Filter';

export default React.memo(function TodoList({data}: any): any {
  const navigation = useNavigation();
  const renderItem = ({item}: any) => (
    <StyledTouchableOpacity
      type={item.status}
      onPress={() => navigation.navigate('todoItem', {id: item.id})}>
      <StyledText>{`${item.title} #${item.id}`}</StyledText>
    </StyledTouchableOpacity>
  );
  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      data={data}
      renderItem={renderItem}
      keyExtractor={(x: any) => x.id.toString()}
    />
  );
});

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${props =>
    todoTypes[props.type]?.color || todoTypes.todo.color}};
  justify-content: center;
  align-items: center;
  height: 60px;
  text-align: center;
  margin-bottom: 10px;
`;
const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
