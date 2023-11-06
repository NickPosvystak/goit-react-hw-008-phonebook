// import { ContactForm } from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import React from 'react';
// import css from 'App.module.css';

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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
  
  const onSubmit = (contact) => {
    console.log('contact: ', contact);
    
  }

  return (
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
  );
};

export default ContactsPage;
