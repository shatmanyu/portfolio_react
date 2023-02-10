import React from 'react';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState:{
        selectedOption: 'Featured'
    },
    reducers: {
        setSelectedOption(state,action){
            // console.log("action",action.payload)
            state.selectedOption = action.payload
        }
    }
})
export const {setSelectedOption} = portfolioSlice.actions;
export default portfolioSlice.reducer;