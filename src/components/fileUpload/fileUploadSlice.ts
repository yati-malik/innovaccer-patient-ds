import { createSlice } from '@reduxjs/toolkit';

const fileUploadSlice = createSlice({
    name: 'fileUpload',
    initialState: true,
    reducers:{
        toggleUploaded: state => {debugger; return !state}
    }
})

export const {toggleUploaded} = fileUploadSlice.actions;

export default fileUploadSlice.reducer;