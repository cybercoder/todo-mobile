import {combineReducers} from 'redux-immer';
import produce from 'immer';

import todo from './todo';

export default combineReducers(produce, {todo});
