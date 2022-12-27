import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        value:"",
        sendMessageIsOpen: false
    },
    reducers: {
        openSendMessage: state => {
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: state => {
            state.sendMessageIsOpen = false;
        }
    }
});

// functions 
export const { openSendMessage, closeSendMessage } = mailSlice.actions;

// states
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

// reducer
export default mailSlice.reducer; 