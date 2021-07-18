import { connect } from 'react-redux';

import { filterContact, getFilter } from '../../redux/contacts';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
