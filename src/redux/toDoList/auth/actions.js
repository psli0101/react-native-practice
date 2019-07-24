import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR
} from '@constants/actionTypes';

export const authLogin = (id) => ({
    type: AUTH_LOGIN,
    payload: id
});

export const authLoginSuccess = (payload) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: payload
});

export const authLoginError = (error) => ({
    type: AUTH_LOGIN_ERROR,
    payload: error
});
