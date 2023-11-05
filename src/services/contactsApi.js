import axios from 'axios';

const contactsInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    headers: {
        Authorization:"Bearer ..."
    }
});

// Register

export const requestRegister = async formData => {
  const { data } = await contactsInstance.post('/users/signup', formData);
  console.log('data: ', data);

  return data;
};

// Login

export const requestLogin = async formData => {
  const { data } = await contactsInstance.post('/users/login', formData);

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
