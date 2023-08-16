import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import baseAPI from './services';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseAPI.reducerPath]: baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseAPI.middleware]
});

export default store;
