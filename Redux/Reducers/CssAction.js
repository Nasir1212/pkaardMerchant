import { createSlice } from "@reduxjs/toolkit";

const CssSlice = createSlice({
    name:"CssAction",
    initialState:{
        layout:"show_aside",
        hide_aside_container_width:"",
        navigation_width:""
    },
    reducers:{
        SET_ASLIDE_CLASS(state, actions){
            state.layout = actions.payload[0],
            state.hide_aside_container_width = actions.payload[1],
            state.navigation_width = actions.payload[2]
        },
       
    }
})

export const {SET_ASLIDE_CLASS,SET_NAME} = CssSlice.actions;
export default CssSlice.reducer;
