import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import logo from './logo.svg';
import Container from './components/request-panel/Container';

function App() {
  return (
    <Provider store={store}>
      <img src={logo} className="App-logo" alt="logo" />
      <Container />
    </Provider>
  );
}

export default App;
