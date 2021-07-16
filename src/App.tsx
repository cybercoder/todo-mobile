import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Home from './screens/Home';

import {applyMiddleware, createStore} from 'redux';
import {Provider as ReduxStoreProvider} from 'react-redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const MainStack = createStackNavigator();

export default function App(): any {
  return (
    <ReduxStoreProvider
      store={createStore(rootReducer, applyMiddleware(thunk))}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#D43BB2',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}>
          <MainStack.Screen
            name="home"
            component={Home}
            options={{headerTitle: 'To-do App'}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </ReduxStoreProvider>
  );
}
