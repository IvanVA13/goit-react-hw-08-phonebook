import { Component } from 'react';

import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

class ContactsPage extends Component {
  render() {
    return (
      <>
        <Section title={'Phonebook'} main={true}>
          <ContactForm />
        </Section>
        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

export default ContactsPage;
