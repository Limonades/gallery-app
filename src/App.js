import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import logo from './logo.svg';
import { RequestPanel, ResultPanel } from './components';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <img src={logo} className="App-logo" alt="logo" />
      <RequestPanel />
      <ResultPanel />
    </Provider>
  );
}

export default App;
