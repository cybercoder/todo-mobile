import React from 'react';
import styled from 'styled-components/native';

export const todoTypes: object = {
  completed: {
    caption: 'Completed',
    color: '#55CA69',
  },
  inprogress: {
    caption: 'In-Progress',
    color: '#891d71',
  },
  todo: {
    caption: 'Todo',
    color: '#E2A03B',
  },
};
interface FilterProps {
  onFilterPress: object;
}
export default React.memo(function Filter({
  onFilterPress,
}: FilterProps): React.ReactElement {
  return (
    <FilterContainer>
      <FilterItem color="black" caption="All" onPress={() => onFilterPress()} />
      {Object.keys(todoTypes).map(item => (
        <FilterItem
          key={item}
          color={todoTypes[item]?.color}
          caption={todoTypes[item]?.caption}
          onPress={() => onFilterPress(item)}
        />
      ))}
    </FilterContainer>
  );
});

const FilterItem = ({color, caption, onPress}) => (
  <FilterItemWrapper onPress={onPress}>
    <CircleBullet color={color} />
    <Caption>{caption}</Caption>
  </FilterItemWrapper>
);

const FilterItemWrapper = styled.TouchableOpacity`
  min-height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CircleBullet = styled.View`
  background-color: ${props => props.color};
  height: 20px;
  width: 20px;
  margin-end: 5px;
  border-radius: 10px;
`;

const Caption = styled.Text`
  font-size: 20px;
  color: #d43bb2;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
