import { actionTypes } from "./actions";
import { initialState } from "./index";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SAMPLE:
        return Object.assign({}, state, {
          some: action.value
        })
      default: return state
    }
  }