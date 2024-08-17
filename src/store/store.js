import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from './features/auth/authSlice';
import { ipSearchApi } from '../api/ipSearchApi';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [ipSearchApi.reducerPath]: ipSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipSearchApi.middleware),
});