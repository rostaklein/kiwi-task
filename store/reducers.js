import actionTypes from "./actionTypes";
import { initialState } from "./index";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_LETTER:
        return Object.assign({}, state, {
          numbers: String(state.numbers)+String(action.number)
        })
      case actionTypes.REMOVE_LAST_LETTER:
        if(state.numbers.length>0){
          return Object.assign({}, state, {
            numbers: state.numbers.slice(0, -1)
          })
        }else{
          return Object.assign({}, state, {
            sentence: state.sentence.slice(0, -1)
          })
        }
        
      case actionTypes.RESET_TIMER:
        console.log(state.numbers);
        return state;
      case actionTypes.REQUEST_STARTED:
        return Object.assign({}, state, {
          isLoading: true
        })
      case actionTypes.RECEIVED_WORDS:
        return Object.assign({}, state, {
          isLoading: false,
          suggestions: action.words
        })
      case actionTypes.ADD_TO_SENTENCE:
        return Object.assign({}, state, {
          sentence: state.sentence+" "+action.sequence,
          suggestions: [],
          numbers: ""
        })
      default: return state
    }
  }