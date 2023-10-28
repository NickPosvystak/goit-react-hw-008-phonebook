import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { fetchAddContacts, fetchContacts, fetchDeleteContacts } from 'services/api';

axios.defaults.baseURL = 'https://6537d9cda543859d1bb0f2ae.mockapi.io';

export const requestContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contactsData = await fetchContacts();
      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );
  console.log('requestContacts: ', requestContacts());

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (mewContact, thunkAPI) => {
    try {
      const contactsData = await fetchAddContacts(mewContact);
      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => { 
        try {
            const contactsData = await fetchDeleteContacts(id);
            return contactsData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
    });