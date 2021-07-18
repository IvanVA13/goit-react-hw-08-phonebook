import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth';

import AppBar from './AppBar';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
