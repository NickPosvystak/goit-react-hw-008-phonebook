import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsReducer';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const onSubmit = data => {
      contacts.some(contact =>
        contact.name.toLowerCase() === data.name.toLowerCase()
        ? alert(`${data.name} is already in contacts`)
        : dispatch(addContact(data))
        );
        
        console.log('data: ', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Phonebook</h1>
      <label>
        / <span>Name:</span>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Rosa Andersen"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Number:</span>
        <input
          {...register('number', { required: true })}
          type="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        {errors.number && <span>This field is required</span>}
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
