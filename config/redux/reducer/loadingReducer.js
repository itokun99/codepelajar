import { actionTypes } from '../actions'

const initState = {
  show: false
}

const loadingReducer = (state = initState, action) => {
  switch(action.type){
    case actionTypes.LOADING_SHOW:
      return {
        ...state,
        show: true
      }
    case actionTypes.LOADING_HIDE:
      return {
        ...state,
        show: false
      }
    default:
      return state
  }
}

export default loadingReducer;