import { connect } from 'react-redux';

import { register } from '../../redux/auth';
import RegisterComponent from './RegisterComponent';

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterComponent);
