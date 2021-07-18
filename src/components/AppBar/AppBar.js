import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.scss';
import logo from './logo.png';
import routes from '../../routes';

const AppBar = ({ isAuthenticated }) => (
  <Navbar bg="light" variant="primary" className={styles.navbar}>
    <Navbar.Brand as={Link} to={routes.home}>
      <img src={logo} alt="" height="30" />
    </Navbar.Brand>
    <Nav
      variant="pills"
      className={isAuthenticated ? styles.login : styles.logout}
    >
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Nav>
  </Navbar>
);

export default AppBar;
