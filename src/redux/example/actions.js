import {
  HELLO,
  HELLO_ERROR
} from '@constants/actionTypes';

export const hello = () => ({
  type: HELLO
});

export const helloError = (error) => ({
  type: HELLO_ERROR,
  error 
});
