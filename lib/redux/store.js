import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// COMBINING OUR REDUCERS
const rootReducers = combineReducers({ user: userSlice })

// PERSISTING OUR REDUCER
// const persistedStore = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
})
