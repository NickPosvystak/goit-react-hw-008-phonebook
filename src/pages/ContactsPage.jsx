// import { ContactForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import React from 'react';
// import css from 'App.module.css';

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "redux/ContactsReducer";
import { selectContacts, selectContactsError, selectContactsFilterTerm, selectContactsIsLoading } from "redux/selectors";

const ContactsPage = () => {

   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch()

  
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectContactsIsLoading)
  const error = useSelector(selectContactsError)
  const filterTerm = useSelector(selectContactsFilterTerm)
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
   
  const onSubmit = (contact) => {
    console.log('contact: ', contact);

    dispatch(addContact(contact))
    reset()
  }
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
  }

  return (
    <div>


   
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name:</span>
        <input {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Number:</span>
        <input {...register('number', { required: true })} type="number" />
        {errors.number && <span>This field is required</span>}
      </label>
     

      <button type="submit">Add contact</button>
    </form>

      {isLoading && <p>Loading...</p>}
      <ul>
        {Array.isArray(contacts) && contacts.map(({ id, name, number }) => {
          return (<li key={id}>
            <h3>{name}</h3>
            <p>{number}</p>
            <button onClick={()=>{onDeleteContact(id)}}>❌</button>
          </li>)
        })}
      </ul>
   </div>
  );
};

export default ContactsPage;
