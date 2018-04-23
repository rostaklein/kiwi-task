import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducer as generalReducer } from "./reducers"

export const initialState = {
  numbers: "",
  suggestions: [],
  isLoading: false,
  sentence: "Whatever rly rly loong"
}

export const initStore = (initialState = initialState) => {
  return createStore(generalReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
