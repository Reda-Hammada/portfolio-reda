import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../services/profile/profileSlice'
import projectReducer from '../services/projects/projectSlice'



export default configureStore({
    profile:profileReducer,
    projects:projectReducer,
})