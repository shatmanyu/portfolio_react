import { configureStore } from '@reduxjs/toolkit';
import topbarReducer from './topbarSlice';
import portfolioReducer from './portfolioSlice';
const store = configureStore({
    reducer: {
        topbar: topbarReducer,
        portfolio: portfolioReducer,

        
    },
});

export default store;