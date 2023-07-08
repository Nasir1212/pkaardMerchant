import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:'loginAction',
    initialState:{
        is_Login:false,
        user_data:[]
    },
    reducers:{
        SET_USER_LOG_DATA(state,actions){
           state.is_Login=actions.payload[0],
           state.user_data = actions.payload[1]
        }
    }
})

export const  {SET_USER_LOG_DATA} = loginSlice.actions;
export default loginSlice.reducer;
