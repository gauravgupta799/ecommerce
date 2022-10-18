import {loginStart,loginSuccess,loginFailure,signUpStart, signUpSuccess, signUpFailure} from "./userSlice";
import axios from "axios";

const url1 = "http://localhost:8800/api/auth/login";
const url2 = "http://localhost:8800/api/auth/register";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post(url1, user)
        // console.log("Login",res.data)
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure(err));
    }
}

export const signUp = async (dispatch, user) =>{
    dispatch(signUpStart());
    try{
        const res = await axios.post(url2, user)
        // console.log(res.data)
        dispatch(signUpSuccess(res.data));

    }catch(err){
        dispatch(signUpFailure(err))
    }

}