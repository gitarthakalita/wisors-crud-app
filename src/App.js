import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Routes from './Routes';
import Sidebar from './layouts/sidebar/sidebar';

import { Provider } from 'mobx-react';
import appStore from './stores/store';

class App extends Component {
  render() {
    return (

      <Provider store={appStore}>
        <BrowserRouter basename='/dashboard'>
          <div className>
            <Sidebar />

            <Routes />
          </div>

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
