import { createSlice } from "@reduxjs/toolkit";


const trainerNamSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers:{
        setTrainerName: (current, action) => action.payload
    }
})

export const { setTrainerName } = trainerNamSlice.actions

export default trainerNamSlice.reducer