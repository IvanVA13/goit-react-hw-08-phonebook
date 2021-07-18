import { connect } from 'react-redux';
import { logIn } from '../../redux/auth';
import LogInComponent from './LogInComponent';

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LogInComponent);
