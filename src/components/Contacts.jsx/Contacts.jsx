import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/ContactsReducer";
import { selectContacts, selectContactsError, selectContactsFilterTerm, selectContactsIsLoading } from "redux/selectors";



export const Contacts = ({ contacts }) => {

    const contactsIetms = useSelector(selectContacts);
    const isLoading = useSelector(selectContactsIsLoading);
    const error = useSelector(selectContactsError);

    const filter = useSelector(selectContactsFilterTerm)

    const dispatch = useDispatch()
    
      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
     
    
     const onDeleteContact = contactId => {
       dispatch(deleteContact(contactId));
     };

     const filterContacts = () => {
       return contacts.filter(({ name }) =>
         name.toLowerCase().includes(filter.toLowerCase())
       );
     };
    
  return (
    <div>
      {/* {isLoading && <p>Loading...</p>} */}
      <ul>
        {/* {Array.isArray(contacts) && */}
        {contactsIetms.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{number}</p>
              <button
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


