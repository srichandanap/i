import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tech: [],
}

export const cvSlice = createSlice({

    name: 'cv',
    initialState,
    reducers: {

        addTech: (state, action) => {
            state.tech = action.payload;
            console.log(state.tech);
        },

    },

})


export const { addTech } = cvSlice.actions;


export default cvSlice.reducer