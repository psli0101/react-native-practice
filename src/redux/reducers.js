import {
  HELLO,
  USER_GET_LIST,
  USER_GET_LIST_SUCCESS,
  USER_GET_LIST_ERROR
} from '@constants/actionTypes';

const INIT_STATE = {
  data: {}
}

export default (state = {}, action) => {
  switch (action.type) {
    case USER_GET_LIST:
      return { ...state };

    case USER_GET_LIST_SUCCESS:
      return { ...state, data: action.payload };

    case USER_GET_LIST_ERROR:
      return { ...state, error };

    default: return { ...state };
  }
}
