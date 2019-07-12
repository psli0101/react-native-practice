import { all } from 'redux-saga/effects';

import getListSagas from './toDoList/getList/saga';

export default function* rootSaga (getState) {
  yield all([
    getListSagas(),
  ]);
}
