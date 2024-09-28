import {configureStore, createSlice} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";


const  Myntrastore = configureStore({
  reducer:{
    items: itemsSlice.reducer
  }
})

export default Myntrastore;