import { createSlice} from "@reduxjs/toolkit"

const privacySlice = createSlice({
  name: 'privacy',
  initialState:{counterVal:0},
  reducers:{
    toggle:(state) =>{
     return state = !state;
    }
  }

})

//exporting the second slice 
export const privacyAction = privacySlice.actions;
export default privacySlice;