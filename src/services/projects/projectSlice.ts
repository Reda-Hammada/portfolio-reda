import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { initialStateType } from './InitialState.type';

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