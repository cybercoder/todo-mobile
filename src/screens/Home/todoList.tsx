import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';

export default function TodoList({data}: any): any {
  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => {}}>
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
}
