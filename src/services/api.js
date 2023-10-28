import axios from 'axios';

axios.defaults.baseURL = 'https://6537d9cda543859d1bb0f2ae.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const fetchAddContacts = async contactsData => {
  const { data } = await axios.post('/contacts', contactsData);
  return data;
};

export const fetchDeleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
