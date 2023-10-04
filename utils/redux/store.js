import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import jobReducers from "./jobsSlice";
import statusReducers from "./statusSlice";

export const store = configureStore({
    reducer: {
        user: userReducers,
        jobs: jobReducers,
        status: statusReducers
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
})
