import { createSlice } from "@reduxjs/toolkit";
import jwt from 'jsonwebtoken';

const initialState = {
    currentUser: typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('user')) || null : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const userData = {
                id: action.payload.uid,
                emailVerified: action.payload.emailVerified,
                email: action.payload.email,
                isAdmin: action.payload.email === "saket@sixpl.com" || action.payload.email === "anuj@sixpl.com"
            }

            console.log(action.payload);

            state.currentUser = userData
            localStorage.setItem("user", JSON.stringify(userData))

            localStorage.setItem("access_token", JSON.stringify(action.payload.stsTokenManager.accessToken))
            localStorage.setItem("refresh_token", JSON.stringify(action.payload.stsTokenManager.refreshToken))

            const syncToken = jwt.sign({ payload: { x: 1, y: '2' } }, 'JWT_SECRET');
            console.log(syncToken);
        },

        logout: (state) => {
            state.currentUser = null;
            localStorage.setItem("user", null)
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions
export default userSlice.reducer