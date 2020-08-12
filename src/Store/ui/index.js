import { createSlice } from '@reduxjs/toolkit'

const ui = createSlice({
    name:"ui",
    initialState:{},
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload;
        },
        clearData :(state,action)=>{
            state.data= {};
        },
        setId : (state,action)=>{
            state.id = state.payload
        },
        clearId:(state,action)=>{
            state.id=null
        }
    }
})

export const selectData = state=>state.data
export const selectId = state=>state.id
export const {reducer,actions} = ui;
export const { setData,clearData,clearId,setId} = actions;

export default reducer;