import { combineReducers } from 'redux';

import getList from './toDoList/getList/reducer';

const reducers = combineReducers({
  getList,
});

export default reducers;
