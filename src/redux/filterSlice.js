const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {
    filterTerm: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        setFilterTerm(state, action) {
            state.filterTerm= action.payload;
        }
    }
})

export const { setFilterTerm } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;