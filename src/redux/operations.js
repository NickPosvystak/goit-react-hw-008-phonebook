import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestAddContacts,
  requestContacts,
  requestDeleteContacts,
} from 'services/api';
import { requestLogin, requestRegister } from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await requestContacts();

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await requestAddContacts(newContact);

      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const deletedContact = await requestDeleteContacts(id);

      return deletedContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


// Authorizations------------------------

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData)
      console.log('response: ', response);

      return response  // Go to payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);
      console.log('response: ', response);

      return response; // Go to payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)