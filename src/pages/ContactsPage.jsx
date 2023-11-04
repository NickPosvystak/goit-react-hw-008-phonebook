import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { Outlet } from 'react-router-dom';
import css from 'App.module.css';

const ContactsPage = () => {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
