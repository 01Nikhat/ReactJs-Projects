import { createSlice} from "@reduxjs/toolkit";

    const counterSlice = createSlice({
      name:'counter',
      initialState:{counterVal :0},
      reducers:{
        increment: (state)=>{
          state.counterVal++;
         // console.log(state);
          
        },
        decrement: (state)=>{
          state.counterVal--;
          //console.log(state);
        },
        add: (state,action)=>{
          state.counterVal += Number(action.payload);
          //console.log(state.counterVal);
        },
        subtract: (state,action)=>{
          state.counterVal -= Number(action.payload);
          //console.log(state.counterVal);
        }
      }
    });
    //exporting first slice

    export const counterAction = counterSlice.actions;
    export default counterSlice;