import { combineReducers } from 'redux';

import getList from './toDoList/getList/reducer';
import authLogin from './toDoList/auth/reducer';

const reducers = combineReducers({
  getList,
  authLogin,
});

export default reducers;
