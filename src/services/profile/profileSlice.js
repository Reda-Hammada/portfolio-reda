import {createSlice} from '@reduxjs/toolkit';
import { profileService } from './profileService';

const initialState  = {
    profile : [],
    success: false,
    error: false,
}



export const  profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{},
    extraReducers: (builder) => {

    }

})


export default profileSlice.reducer;