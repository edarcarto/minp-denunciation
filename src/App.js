import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import configureStore from './services/store/config.store';
import { CONSTANTS as constantsActions } from './services/actions';
import Constants from './utils/Constants';

import 'materialize-css/dist/css/materialize.min.css';
import Home from './parts/home/Home';
import Case from './parts/cases/Case';

const store = configureStore();
store.dispatch(constantsActions(false));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router basename={Constants.ROUTES.basename} >
          <Route exact path={Constants.ROUTES.path}
            render={() => <Redirect to={Constants.ROUTES.home} />}>
          </Route>
          <Route exact path={Constants.ROUTES.home} component={ Home }></Route>
          <Route exact path={Constants.ROUTES.case} component={ Case }></Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
