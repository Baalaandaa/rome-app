/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Componenr} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'

const store = createStore(reducer);

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);
