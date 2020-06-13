import React, { Suspense } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import '../assets/styles/styles.scss';
import '../i18n';

import Template from './Template';
import Home from '../pages/home/Home';
import store from '../redux/store';

const history = createHashHistory();

/**
 * Main app container
 */
const App: React.FC = () => (
  <Provider store={store}>
    <Suspense
      fallback={
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      }
    >
      <Router history={history}>
        <Template>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Template>
      </Router>
    </Suspense>
  </Provider>
);

export default App;
