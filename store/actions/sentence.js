import actionTypes from "../actionTypes";

export const addToSentence = sequence => dispatch => {
    return dispatch({ type: actionTypes.ADD_TO_SENTENCE, sequence})
}