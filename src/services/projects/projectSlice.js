import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { projectService } from '../projects/projectService';

const initialState = {
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