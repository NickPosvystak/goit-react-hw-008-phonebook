import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconDelete } from '../../assets/delete.svg';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsData);
  const filter = useSelector(state => state.filter.filterData);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (filter) {
        const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
      );
    }
    return contacts;
  
    };
  const filteredContacts = getFilteredContacts();

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <ul className={css.boxList}>
      {showContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.itemList}>
            <span className={css.nameItem}>{name}: </span>
            <span>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btnDelete}
            >
              <IconDelete className={css.iconDelete} />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
