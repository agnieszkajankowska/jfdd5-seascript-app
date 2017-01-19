import {MAKE_RESERVATION} from "./actionTypes";


const initialState = {
  reservations: []
}

export default ( state = initialState, action ) => {
  switch (action.type) {
    case MAKE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.concat(action.formState)
      }
    default: return state
  }
}
