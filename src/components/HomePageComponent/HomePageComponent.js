import { useState } from 'react';
import { Button, Collapse, Container } from 'react-bootstrap';
import styles from './HomePageComponent.module.scss';

function Toggler({ variant, button, text }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant={variant}
        onClick={() => setOpen(!open)}
        aria-controls="fade-text"
        aria-expanded={open}
      >
        {button}
      </Button>
      <Collapse in={open}>
        <div id="fade-text">{text}</div>
      </Collapse>
    </>
  );
}

const HomePageComponent = () => {
  return (
    <Container className={`d-block ${styles.container}`}>
      <h1 className={styles.title}>Personal phone book</h1>
      <p className={styles.desc}>What u can do in your personal phone book:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Toggler
            variant="primary"
            button="Add contacts"
            text="U can add new contact in your phone book with name and number"
          />
        </li>
        <li className={styles.item}>
          <Toggler
            variant="warning"
            button="Filter contacts"
            text="Filter your contacts by name"
          />
        </li>
        <li className={styles.item}>
          <Toggler
            variant="primary"
            button="Edit contacts"
            text="Edit contact name or number (in developing)"
          />
        </li>
        <li className={styles.item}>
          <Toggler
            variant="warning"
            button="Delete contacts  😥"
            text="Delete contacts from your phone book. Forever..."
          />
        </li>
      </ul>
    </Container>
  );
};
export default HomePageComponent;
