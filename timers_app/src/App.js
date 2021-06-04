import './App.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import new components
import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <h1>TMRZ</h1>
      {/* Display the new components */}
      <NewTimer />
      <ListTimers />
    </Provider>
  );
}

export default App;

