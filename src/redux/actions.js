import axios from 'axios';
import {
  HELLO,
  USER_GET_LIST,
  USER_GET_LIST_SUCCESS,
  USER_GET_LIST_ERROR
} from '@constants/actionTypes';

export const hello = () => ({
  type: HELLO
})

export const getListRequest = () => ({
  type: USER_GET_LIST,
})

export const getListSuccess = response => ({
  type: USER_GET_LIST_SUCCESS,
  response
})

export const getListError = error => ({
  type: USER_GET_LIST_ERROR,
  error
})

export const getList = () => (dispatch => {
  dispatch(getListRequest());
  return fetch('http://107.23.45.68/people/public/index.php/api/index')
    .then(response => dispatch(getListSuccess(response)))
    .catch(error => dispatch(getListError(error)));
})
