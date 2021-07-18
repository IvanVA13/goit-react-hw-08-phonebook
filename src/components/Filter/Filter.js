import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';
import styles from './Filter.module.scss';

const Filter = props => {
  const { value, onFilter } = props;
  return (
    <InputGroup className={`mb-3 ${styles['input-layout']}`}>
      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
      <FormControl
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Name to filter"
        aria-label="Name to filter"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
