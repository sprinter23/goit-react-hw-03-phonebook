import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, onFilterContacts }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onFilterContacts} />
  </Label>
);

export default Filter;


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
