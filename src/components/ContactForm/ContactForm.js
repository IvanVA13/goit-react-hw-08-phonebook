import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts, submitHandler } = this.props;

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : submitHandler(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form className={styles.form} onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            required
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="number"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            autoComplete="off"
            required
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default ContactForm;
