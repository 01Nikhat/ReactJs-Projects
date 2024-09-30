import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchstatus',
  initialState :{
    fetchDone: false, //false pending and true done
    currentlyFetching: false,
  },
  reducers : {
    markFetchDone: (state) => {
      state.fetchDone = true; // Directly mutate the state without returning
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;