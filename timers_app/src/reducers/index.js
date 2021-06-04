import { combineReducers } from 'redux';

import timerReducer from './timersReducer';
import selectedTimerReducer from './selectedTimerReducer';

export default combineReducers({
  timers: timerReducer,              // array
  selectedTimer: selectedTimerReducer, // int/number
});