import { actionTypes } from '../actions';

const initState = {
  isLoading : false,
  response: {},
  isError : false,
}

const authorizeReducer = (state = initState, action) => {
  switch(action.type){
    case actionTypes.FETCH_AUTHORIZE:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_AUTHORIZE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        isError: false,
      }
    case actionTypes.FETCH_AUTHORIZE_FAILED:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        isError: true,
      }
    default:
      return state
  }
}


export default authorizeReducer;