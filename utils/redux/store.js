import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import jobReducers from "./jobsSlice";

// COMBINING OUR REDUCERS

// PERSISTING OUR REDUCER
// const persistedStore = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: {
        user: userReducers,
        jobs: jobReducers
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
})
