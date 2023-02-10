import React from 'react';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const topbarSlice = createSlice({
    name: 'topbar',
    initialState:{
        menuOpen: false,
    },
    reducers: {
        setMenuOpen(state,action){
            state.menuOpen = !state.menuOpen
        }
    }
})
export const {setMenuOpen} = topbarSlice.actions;
export default topbarSlice.reducer;