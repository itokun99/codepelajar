import actionTypes from './actionTypes';
import { API } from '../../api';
import {  httpOpen, httpSuccess, httpFailed } from './httpRequest';
import { loadingHide, loadingShow } from './loading';

export const login = data => async dispatch => {
  dispatch(httpOpen());
  dispatch(loadingShow());
  dispatch({
    type: actionTypes.FETCH_AUTHORIZE
  })
  try {
    const payload = {
      body: data
    }
    const response = await API.login(payload)
    dispatch({
      type: actionTypes.FETCH_AUTHORIZE_SUCCESS,
      payload: response,
    })
    dispatch(httpSuccess());
    dispatch(loadingHide());
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_AUTHORIZE_FAILED,
      payload: error,
    })
    dispatch(httpFailed());
    dispatch(loadingHide());
  }
}