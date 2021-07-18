import { Switch } from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import AppBar from './components/AppBar';
import routes from './routes';
import { getCurrentUser } from './redux/auth';
import { PrivateRoute, PublicRoute } from './RoutesHOC';
import Loader from './components/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);
const LogInPage = lazy(() =>
  import('./views/LogInPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterPage}
          />
          <PublicRoute path={routes.logIn} restricted component={LogInPage} />
          <PrivateRoute path={routes.contacts} component={ContactsPage} />
        </Switch>
      </Suspense>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// myemail2324@gmail.com
