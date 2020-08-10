import {createSlice} from '@reduxjs/toolkit'
const user ={
    isLoggedIn :false,
    token:null
}
const userSlice = createSlice({
    name:"user",
    initialState:user,
    reducers:{
        userLogin:(state,action)=>{
            state.isLoggedIn=true;
            state.token=action.payload;
        },
        userLogout:(state,action)=>{
            state.isLoggedIn=false
            state.token=null;
        }
    }
})

const {reducer,actions} = userSlice;
export const { userLogin,userLogout} = actions;

export const selectToken = state=>state.user.token;
export const selectIsLoggedIn = state=>state.user.isLoggedIn;

export default reducer;
