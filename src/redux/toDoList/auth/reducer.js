import {
  AUTH_LOGIN_LIST,
  AUTH_LOGIN_LIST_SUCCESS,
  AUTH_LOGIN_LIST_ERROR
} from '@constants/actionTypes';

const INIT_STATE = {
  toDoList: [],
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN_LIST:
      return { ...state, loading: false };
    
    case AUTH_LOGIN_LIST_SUCCESS:
      return { ...state, loading: true, toDoList: action.payload.data};
    
    case AUTH_LOGIN_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };
    
    default: return { ...state };
  }
}
