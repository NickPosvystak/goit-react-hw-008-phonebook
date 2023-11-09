import { useDispatch, useSelector } from 'react-redux';
import { StyledFilter } from './StyledFilter';
import { selectContactsFilterTerm } from 'redux/selectors';
import { setFilterTerm } from 'redux/ContactsReducer';

export const Filter = ({ onChange }) => {
    const dispatch = useDispatch()

    const filter = useSelector(selectContactsFilterTerm)

    const handleFilter = (event) => {
    dispatch(setFilterTerm(event.currentTarget.value));
}

  return (
    <StyledFilter>
      <h3>Find contact by name</h3>
      <input
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={handleFilter}
      />
    </StyledFilter>
  );
};
export default Filter;
