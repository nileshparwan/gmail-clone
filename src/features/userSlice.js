import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = null;
        }
    }
});


// functions 
export const { login, logout } = userSlice.actions;

// states
export const selectUser = (state) => state.user.user;

// reducer
export default userSlice.reducer; 