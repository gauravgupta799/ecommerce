import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cardRedux";
import userReducer from "./userSlice";

export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
    },
});
