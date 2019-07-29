import actionTypes from './actionTypes';
import { store } from '../store';

export const httpOpen = () => ({
    type: actionTypes.HTTP_OPEN,
})

export const httpSuccess = () => ({
    type: actionTypes.HTTP_SUCCESS,
})


export const httpFailed = () => ({
    type: actionTypes.HTTP_FAILED,
})


export const httpReset = () => ({
    type: actionTypes.HTTP_RESET
})