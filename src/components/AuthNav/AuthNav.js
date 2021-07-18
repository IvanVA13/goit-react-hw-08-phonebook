import { Link } from 'react-router-dom';
import routes from '../../routes';
import Nav from 'react-bootstrap/Nav';
import styles from './AuthNav.module.scss';

const AuthNav = () => (
  <>
    <Nav.Item className={styles['nav-item']}>
      <Nav.Link
        as={Link}
        to={routes.logIn}
        eventKey={routes.logIn}
        className={styles['nav-link']}
      >
        LogIn
      </Nav.Link>
    </Nav.Item>
    <Nav.Item className={styles['nav-item']}>
      <Nav.Link
        as={Link}
        to={routes.register}
        eventKey={routes.register}
        className={styles['nav-link']}
      >
        Register
      </Nav.Link>
    </Nav.Item>
  </>
);

export default AuthNav;
