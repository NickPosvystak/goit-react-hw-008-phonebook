import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/ContactsReducer";
import { selectContacts, selectContactsError, selectContactsFilterTerm, selectContactsIsLoading } from "redux/selectors";
import { StyledItem, StyledList } from "./StyledContacts";



export const Contacts = ({ contacts }) => {

    const contactsItems = useSelector(selectContacts);
    const isLoading = useSelector(selectContactsIsLoading);
    const error = useSelector(selectContactsError);

    const filter = useSelector(selectContactsFilterTerm)

    const dispatch = useDispatch()
    
      // useEffect(() => {
      //   dispatch(fetchContacts());
      // }, [dispatch]);
     
    
     const onDeleteContact = contactId => {
       dispatch(deleteContact(contactId));
     };

    //  const filterContacts = () => {
    //    return contacts.filter(({ name }) =>
    //      name.toLowerCase().includes(filter.toLowerCase())
    //    );
    //  };
    
  return (
    <div>
      {/* {isLoading && <p>Loading...</p>} */}
      <StyledList>
        {/* {Array.isArray(contacts) && */}
        {contactsItems.map(({ id, name, number }) => {
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
}


