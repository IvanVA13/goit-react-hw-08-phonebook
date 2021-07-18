import { connect } from 'react-redux';

import { getIsAuthenticated } from '../../redux/auth';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
