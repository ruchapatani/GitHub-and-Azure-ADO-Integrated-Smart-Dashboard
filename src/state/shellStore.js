import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slice/commonSlice';

export const shellStore = configureStore({
    reducer: {
        common: commonSlice,
    },
})
