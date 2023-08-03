import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

interface initialStateType {
    projects:[],
    success:boolean,
    error:boolean,

}
const initialState:initialStateType = {
    projects:[],
    success:false,
    error:false,
}

export const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{},
    extraReducers:()=>{

    }
})

export default projectSlice.reducer