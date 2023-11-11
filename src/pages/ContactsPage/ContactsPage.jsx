// import { ContactForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import React from 'react';
// import css from 'App.module.css';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts.jsx/Contacts';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  // addContact,
  // deleteContact,
  fetchContacts,
  setFilterTerm,
} from 'redux/ContactsReducer';
import {
  selectContacts,
  selectContactsError,
  // selectContactsFilterTerm,
  selectContactsIsLoading,
  selectFilterTerm,
} from 'redux/selectors';
import { StyledTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilterTerm);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleFilterChange = value => {
  //   dispatch(setFilterTerm(value));
  // };

  // const onSubmit = contact => {
  //   console.log('contact: ', contact);

  //   dispatch(addContact(contact));
  //   reset();
  // };

  // const onDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ContactForm />
      <StyledTitle>Contacts</StyledTitle>

      {isLoading && !error && <h3>Loading...</h3>}
      {contacts && contacts.length !== 0 ? (
        <>
          <Filter  />
          <Contacts contacts={filterContacts} />
        </>
      ) : (
        <p>There is no any contacts here yet</p>
      )}
    </>
  );
};

export default ContactsPage;
