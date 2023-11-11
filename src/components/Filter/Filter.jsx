import { useDispatch, useSelector } from 'react-redux';
import { StyledFilter } from './StyledFilter';
import { selectFilterTerm } from 'redux/selectors';
import { setFilterTerm } from 'redux/filterSlice';
// import { setFilterTerm } from 'redux/ContactsReducer';

export const Filter = () => {
    const dispatch = useDispatch()

    const filter = useSelector(selectFilterTerm)

    const handleFilter = (event) => {
    dispatch(setFilterTerm(event.currentTarget.value));
}

  return (
    <StyledFilter>
      <h3>Find contact by name</h3>
      <input
        type="text"
       
        placeholder="Search contact"
        value={filter}
        onChange={handleFilter}
      />
    </StyledFilter>
  );
};
export default Filter;
