import {getTodoList} from '../../api';
import Toast from 'react-native-toast-message';

export const getTodoListAction = () => async dispatch => {
  try {
    let {data} = await getTodoList();

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
