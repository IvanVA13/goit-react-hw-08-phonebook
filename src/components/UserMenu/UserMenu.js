import { Button, Image } from 'react-bootstrap';

import styles from './UserMenu.module.scss';
const UserMenu = ({ avatar, name, onLogOut }) => (
  <div className={styles['auth-container']}>
    <Image roundedCircle width="30" height="30" src={avatar} alt={name} />
    <span className={styles.user}> Welcome, {name}</span>
    <Button variant="outline-primary" type="button" onClick={onLogOut}>
      Logout
    </Button>
  </div>
);

export default UserMenu;
