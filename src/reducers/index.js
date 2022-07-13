import Products from "./Products";
import Basket from "./Basket";
import {combineReducers} from "redux";

export default combineReducers({
   products: Products,
   basket: Basket,
});
