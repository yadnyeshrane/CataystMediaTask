
import { combineReducers } from "redux";
import ColorProduct from "../Components/Colors/Colorreucer";

import MaterialReducer from "../Components/Material/Materialreducer";
import Productreducer from "../Components/Product/Productreducer";

const rootReducer = combineReducers({
 productlist:Productreducer,
 material:MaterialReducer,
 color:ColorProduct
});

export default rootReducer;
