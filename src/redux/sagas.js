import { all } from 'redux-saga/effects';

import getListSagas from './toDoList/getList/saga';
import authLoginSaga from './toDoList/auth/saga';

export default function* rootSaga (getState) {
  yield all([
    getListSagas(),
    authLoginSaga(),
  ]);
}
