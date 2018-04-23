import actionTypes from "../actionTypes";
import { getWords, receivedWords } from "./words";
let timer = null;

export const addLetter = number => dispatch => {
    dispatch(resetTimer());
    return dispatch({ type: actionTypes.ADD_LETTER, number });
}

export const removeLastLetter = () => dispatch => {
    dispatch(resetTimer());
    return dispatch({ type: actionTypes.REMOVE_LAST_LETTER })
}

const resetTimer = () => dispatch => {
    clearInterval(timer);
    timer = setInterval(() => dispatch(stop()), 1000);
}

const stop = () => (dispatch, getState) => {
  clearInterval(timer);
  const state = getState();
  if(state.numbers.length){
        dispatch(getWords(state.numbers));
  }else{
      return dispatch(receivedWords([]));
  }
  return dispatch({ type: actionTypes.RESET_TIMER });
}