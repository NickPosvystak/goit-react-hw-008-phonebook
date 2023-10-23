import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contactsData);

  const handleAddContact = (name, number) => {
    const isContact = contacts.some(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact.`);
      return;
    }
  
    dispatch(addContact({ id: nanoid(), name, number }));
 };


  return (
    <div className={css.box}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
