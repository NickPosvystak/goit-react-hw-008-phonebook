import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
  },

  // reducers: {
  //   addContact(state, action) {

  //     state.contactsData = [...state.contactsData, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.contactsData = [
  //       ...state.contactsData.filter(
  //         contactData => contactData.id !== action.payload
  //       ),
  //     ];
  //   },
  // },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
