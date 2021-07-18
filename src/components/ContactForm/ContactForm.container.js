import { connect } from 'react-redux';

import { addContact, getItems } from '../../redux/contacts';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  submitHandler: ({ name, number }) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
