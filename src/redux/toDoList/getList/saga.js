import axios from 'axios'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import {
  USER_GET_LIST,
} from '@constants/actionTypes'

import {
  getListSuccess,
  getListError,
} from './actions'

const getListRequest = async () => {
  return axios.get(`*************`)
    .then(response => response.data)
    .catch(error => error)
}

function* getList() {
  try {
    const response = yield call(getListRequest)
    yield put(getListSuccess(response))
  } catch (error) {
    yield put(getListError(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery([USER_GET_LIST], getList),
  ])
}
