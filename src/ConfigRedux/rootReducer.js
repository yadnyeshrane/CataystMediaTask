
import { combineReducers } from "redux";

import MaterialReducer from "../Components/Material/Materialreducer";
import Productreducer from "../Components/Product/Productreducer";
const rootReducer = combineReducers({
 productlist:Productreducer,
 material:MaterialReducer,
});

export default rootReducer;
