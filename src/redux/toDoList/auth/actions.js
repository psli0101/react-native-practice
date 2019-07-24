import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR
} from '@constants/actionTypes';

export const authLogin = () => ({
    type: AUTH_LOGIN,
});

export const authLoginSuccess = (items) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: items
});

export const authLoginError = (error) => ({
    type: AUTH_LOGIN_ERROR,
    payload: error
});
