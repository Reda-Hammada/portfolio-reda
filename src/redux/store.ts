import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../services/profile/profileSlice'
import projectReducer from '../services/projects/projectSlice'



 const store = configureStore({
   reducer:{
    profile:profileReducer,         
    projects:projectReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;