import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: 'status',
    initialState: {
        status: [],
        errorMessage: "",
        loading: false,
        websites: ''
    },
    reducers: {
        addResults: (state, action)=> {
            state.status = action.payload
            state.loading = false;
        },

        setError: (state, action)=> {
            state.errorMessage = action.payload
            state.loading = false;
        },

        addWebsites : (state, action)=> {
            state.websites = action.payload
        },

        setLoading: (state, action)=> {
            state.loading = action.payload
        }
    }
})

export const {addResults, setError, addWebsites, setLoading} = statusSlice.actions
export default statusSlice.reducer;