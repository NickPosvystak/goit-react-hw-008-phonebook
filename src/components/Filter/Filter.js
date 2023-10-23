import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter.filterData);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      className={css.inputFilter}
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
export default Filter;
