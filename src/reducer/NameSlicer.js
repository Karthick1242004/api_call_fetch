import { createSlice } from "@reduxjs/toolkit";

const NameSlicer=createSlice({
    name:"uniquename",
  //  keep a unique name for the name object
    initialState:{
        value:"Karthi"
    },
    reducers:{
      changedname:(state,action)=>{
        state.value=action.payload;
      }
    }
})
export const {changedname}=NameSlicer.actions;
export default NameSlicer.reducer;