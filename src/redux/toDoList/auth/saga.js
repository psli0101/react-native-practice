import axios from 'axios'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import {
  AUTH_LOGIN,
} from '@constants/actionTypes'

import {
  authLoginSuccess,
  authLoginError,
} from './actions'

const authLoginRequest = async () => {
  return axios.get(`*************`)
    .then(response => response.data)
    .catch(error => error)
}

function* authLogin() {
  try {
    const response = yield call(authLoginRequest)
    yield put(authLoginSuccess(response))
  } catch (error) {
    yield put(authLoginError(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery([AUTH_LOGIN], authLogin),
  ])
}
