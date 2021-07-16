import {getTodoList} from '../../api';

export const getTodoListAction = () => async dispatch => {
  try {
    let {data} = await getTodoList();
    return dispatch({
      type: 'LIST',
      payload: data,
    });
  } catch (error) {
    console.log(error);
    // show a danger toast
  }
};
