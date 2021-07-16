import {getTodoList, getTodo, deleteToDo, updateToDo} from '../../api';
import Toast from 'react-native-toast-message';

export const getTodoListAction =
  (filter = null) =>
  async dispatch => {
    try {
      let {data} = await getTodoList({filter});

      return dispatch({
        type: 'LIST',
        payload: data,
      });
    } catch (error) {
      Toast.show({
        text1: 'Error',
        text2: error.response?.data?.message || error.message,
        autoHide: false,
        type: 'error',
      });
    }
  };

export const getToDoAction = id => async dispatch => {
  try {
    let {data} = await getTodo(id);

    dispatch({
      type: 'GETONE',
      payload: data,
    });

    return data;
  } catch (error) {
    Toast.show({
      text1: 'Error',
      text2: error.response?.data?.message || error.message,
      autoHide: false,
      type: 'error',
    });
  }
};
