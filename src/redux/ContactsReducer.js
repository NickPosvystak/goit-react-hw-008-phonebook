import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestAllContacts,
  requestDeleteContact,
} from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestAllContacts();
      console.log('contacts: ', contacts);

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);
      console.log('contact: ', contact);

      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const contact = await requestDeleteContact(contactId);
      console.log('contact: ', contact);

      return contact;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  error: null,
  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
 
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.contacts)) {
          state.contacts.unshift(action.payload);
        } else {
          state.contacts = [action.payload];
        }
        // state.products = [action.payload, ...state.products];
        // state.products.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const contReduser = contactsSlice.reducer;
