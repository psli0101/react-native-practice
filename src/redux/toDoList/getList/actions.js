import {
    USER_GET_LIST,
    USER_GET_LIST_SUCCESS,
    USER_GET_LIST_ERROR
} from '@constants/actionTypes';

export const getList = () => ({
    type: USER_GET_LIST,
});

export const getListSuccess = (items) => ({
    type: USER_GET_LIST_SUCCESS,
    payload: items
});

export const getListError = (error) => ({
    type: USER_GET_LIST_ERROR,
    payload: error
});
