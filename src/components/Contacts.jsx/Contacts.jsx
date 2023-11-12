import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsReducer';
import {
  selectContacts,
  selectContactsIsLoading,
  selectFilterTerm,
} from 'redux/selectors';
import { StyledItem, StyledList } from './StyledContacts';

export const Contacts = ({ contacts }) => {
  const contactsItems = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  const filter = useSelector(selectFilterTerm);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contactsItems.filter(contactsItem =>
    contactsItem.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <StyledList>
        {Array.isArray(filterContacts) &&
          filterContacts.map(({ id, name, number }) => {
            return (
              <StyledItem key={id}>
                <h3>{name}</h3>
                <p>{number}</p>
                <button
                  onClick={() => {
                    onDeleteContact(id);
                  }}
                >
                  ❌
                </button>
              </StyledItem>
            );
          })}
      </StyledList>
    </div>
  );
};
