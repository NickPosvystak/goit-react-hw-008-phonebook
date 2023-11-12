import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts.jsx/Contacts';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/ContactsReducer';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/selectors';
import { StyledTitle } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <StyledTitle>Contacts</StyledTitle>

      {isLoading && !error && <h3>Loading...</h3>}
      {contacts && contacts.length !== 0 ? (
        <>
          <Filter />
          <Contacts />
        </>
      ) : (
        <p>There is no any contacts here yet</p>
      )}
    </>
  );
};

export default ContactsPage;
