import { configureStore } from "@reduxjs/toolkit";
import CssActionReducer from "./Reducers/CssAction";
import LoginActionReducer  from "./Reducers/LoginAction";
export default configureStore({
    reducer:{
        cssClass:CssActionReducer,
        loginAction:LoginActionReducer
    }
})