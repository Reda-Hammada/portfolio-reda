import {createSlice} from '@reduxjs/toolkit';

interface initialStateType {
    profile:[],
    success:boolean,
    error:boolean,

}
const initialState:initialStateType  = {
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