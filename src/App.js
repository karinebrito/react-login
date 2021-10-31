import React from 'react';
import Routes from'./routes';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
