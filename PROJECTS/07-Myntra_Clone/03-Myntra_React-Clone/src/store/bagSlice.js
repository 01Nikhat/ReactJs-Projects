import { configureStore, createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers:{
    addToBag: (state,action) =>{
      //console.log("reducer",store,action);
      state.push(action.payload);
      
      
    },
    removeFromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload);
    }
  }
});




export const bagAction = bagSlice.actions;

export default bagSlice;