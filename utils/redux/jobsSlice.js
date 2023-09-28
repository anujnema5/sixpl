import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: [],
    reducers: {
        addJobs: (state, action) => {
            return action.payload
        },

        addCurrent: (state, action) => {
            const foundObject = state.find(item => item.data.id === action.payload);

            if (foundObject) {
                foundObject.opened = !foundObject.opened
            }

            const updatedArray = state.map((job) => {
                if (job.data.id === action.payload) {
                    return foundObject
                } return job
            })

            console.log(updatedArray);
            // return updatedArray
        }
    }
})

export default jobsSlice.reducer
export const { addJobs, addCurrent } = jobsSlice.actions