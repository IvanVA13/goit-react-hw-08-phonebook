import { connect } from 'react-redux';
import {
  delContact,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/contacts';
import ContactList from './ContactList';

const mapStateToProps = state => ({ contacts: getVisibleContacts(state) });

const mapDispatchToProps = dispatch => ({
  handleDelContact: id => dispatch(delContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
