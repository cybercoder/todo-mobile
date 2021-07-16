import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
export default React.memo(function TodoList({data}: any): any {
  const navigation = useNavigation();
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('todoItem', {id: item.id})}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 20,
          padding: 15,
          marginBottom: 4,
          backgroundColor: '#891D71',
        }}>
        {`${item.title} #${item.id}`}
      </Text>
    </TouchableOpacity>
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
