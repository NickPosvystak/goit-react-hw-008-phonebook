import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestRefreshUser,
  requestRegister,
  setToken,
} from 'services/contactsApi';

// Authorizations-----------ThunkAPI-------------

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);

      return response; // Go to payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const authData = await requestRegister(formData);
      console.log('authData: ', authData);

      return authData; // Go to payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const authData = await requestRefreshUser();
      console.log('authData: ', authData);

      return authData; // Go to payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return false;
      return true; 
    },
  }
);

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  // name
  name: 'auth',

  // Initial state

  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder

      // Register additional-----

      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //Login additional-----

      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
