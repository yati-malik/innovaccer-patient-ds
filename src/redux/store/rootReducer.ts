import { combineReducers } from '@reduxjs/toolkit';
import fileUploadedReducer from '../../components/fileUpload/fileUploadSlice';

const rootReducer = combineReducers({
    fileUploaded: fileUploadedReducer
})

export type RootState =  ReturnType<typeof rootReducer>

export default rootReducer;