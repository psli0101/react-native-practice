import {
  HELLO,
  HELLO_ERROR
} from '@constants/actionTypes';

const INIT_STATE = {
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case HELLO:
      return { ...state, loading: false };
    
    case HELLO_ERROR:
      return { ...state, loading: true};
    
    default: return { ...state };
  }
}
