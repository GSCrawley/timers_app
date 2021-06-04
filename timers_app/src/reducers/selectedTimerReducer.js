// Import the SELECT_TIMER action
import { SELECT_TIMER } from '../actions';

const selectedTimerReducer = (state = null, action) => {
    switch (action.type) {
      // On the SELECT_TIMER action, set the selectedTimer to the value passed in the payload
      case SELECT_TIMER:
        return state = action.payload.index;
  
      default:
        return state;
    }
}

// var newState = state.slice();
//     newState.push(newItem);
// }
// var newState = state.map((item, i) => {
//     if (i === index) {
//       // Returns a new object with the values of item, and overwrites count with new value
//       return {...item, count: item.count + 1};
//     }                          
//     return item;
//   })


export default selectedTimerReducer;