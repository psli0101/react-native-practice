import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR
} from '@constants/actionTypes';

const INIT_STATE = {
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, loading: false };
    
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loading: true};
    
    case AUTH_LOGIN_ERROR:
      return { ...state, loading: true, error: action.payload };
    
    default: return { ...state };
  }
}
