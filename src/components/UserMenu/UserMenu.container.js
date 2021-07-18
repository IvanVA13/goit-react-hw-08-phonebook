import { connect } from 'react-redux';

import { getUserName, LogOut } from '../../redux/auth';
import defaultImage from './ivanv.png';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultImage,
});

const mapDispatchToProps = {
  onLogOut: LogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
