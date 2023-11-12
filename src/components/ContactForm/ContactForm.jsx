import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsReducer';
import { selectContacts } from 'redux/selectors';
import { StyledBtn, StyledForm, StyledInput, Title } from './Contact.styled';

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

    contacts &&
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContact(data));


    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Phonebook</Title>
      <label>
        <StyledInput
          {...register('name', { required: true })}
          type="text"
          placeholder=" Rosa Andersen"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <StyledInput
          {...register('number', {
            required: true,
          })}
          type="number"
          placeholder=" 123456789"
        />
        {errors.number && <span>This field is required</span>}
      </label>

      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};
