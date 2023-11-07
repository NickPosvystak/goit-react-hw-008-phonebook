import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Register

export const requestRegister = async formData => {
  const { data } = await contactsInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

// Login

export const requestLogin = async formData => {
  const { data } = await contactsInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

// Logout

export const requestLogout = async () => {
  const { data } = await contactsInstance.post('/users/logout');

  return data;
};

// Current user

export const requestRefreshUser = async () => {
  const { data } = await contactsInstance.get('/users/current');

  return data;
};

//-------ADD --CONTACTS------

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};
