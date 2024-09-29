import {configureStore, createSlice} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";


const  Myntrastore = configureStore({
  reducer:{
    items: itemsSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
  }
})

export default Myntrastore;