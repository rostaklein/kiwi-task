import apiUrl from "../../constants/apiUrl";
import actionTypes from "../actionTypes";

const requestWords = () => dispatch => {
    console.log("Requesting words");
    return dispatch({ type: actionTypes.REQUEST_STARTED })
}

export const receivedWords = words => dispatch => {
    return dispatch({ type: actionTypes.RECEIVED_WORDS, words })
}

export function getWords(numbers) {
    return function (dispatch) {
      dispatch(requestWords())
      return fetch(apiUrl+"/pw/"+numbers)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
            (console.log(json),
          dispatch(receivedWords(json)))
        )
    }
}