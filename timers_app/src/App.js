import './App.css';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import new components
import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'
import { update } from './actions'


const store = createStore(reducers);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
    <h1>TMRZ</h1>
      {/* Display the new components */}
      <NewTimer />
      <ListTimers />
      </div>
</Provider>  );
}

export default App;

