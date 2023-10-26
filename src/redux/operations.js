import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://6537d9cda543859d1bb0f2ae.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {contacts});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => { 
        try {
            const response = await axios.delete('/contacts/id')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
    });