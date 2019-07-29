import { actionTypes } from '../actions';

const initState = {
  requestLoading : false,
  isError: false,
  reset: false,
}


const httpRequestReducer = (state = initState, action) => {
  switch(action.type){
    case actionTypes.HTTP_OPEN:
      return {
        ...state,
        requestLoading: true,
        reset: false,
      }
    case actionTypes.HTTP_SUCCESS:
      return {
        ...state,
        isError: false,
        requestLoading: false,
        reset: false,
      }
    case actionTypes.HTTP_FAILED:
      return {
        ...state,
        isError: true,
        requestLoading: false,
        reset: false,
      }
    case actionTypes.HTTP_RESET:
      return {
        isError: false,
        requestLoading: false,
        reset: true
      }
    default:
      return state
  }
}

export default httpRequestReducer;