import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const Store = createStore(
    rootReducer,(applyMiddleware(thunk))
  )
console.log("STore",Store.getState())

export default Store;