import {
    USER_GET_LIST,
    USER_GET_LIST_SUCCESS,
    USER_GET_LIST_ERROR
} from '@constants/actionTypes';

const INIT_STATE = {
    toDoList: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_GET_LIST:
      return { ...state, loading: false };
    
    case USER_GET_LIST_SUCCESS:
      return { ...state, loading: true, toDoList: action.payload.data};
    
    case USER_GET_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };
    
    default: return { ...state };
  }
}
