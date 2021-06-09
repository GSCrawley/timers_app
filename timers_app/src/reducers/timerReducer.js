import { NEW_TIMER, TOGGLE_TIMER, UPDATE, DELETE_TIMER, RESET_TIMER } from '../actions';
import Timer from '../Timer'

const timerReducer = (state = [], action) => {
    switch (action.type) {
      case UPDATE:
        return state.map((timer) => {
          if (timer.isRunning) {
            timer = { ...timer, time: timer.time += action.payload.deltaTime }
          }
          return timer
        })

      case NEW_TIMER:
        // Add a new timer, return a copy of state
        const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
        return [...state, new Timer(name)]
      
      case DELETE_TIMER:
            return state.filter(({ name }) => name !== action.payload.name );
      
      
      case TOGGLE_TIMER:
        // Invert the isRunning property of timer at index, return a copy of state
        const newState = state.map((timer, index) => {
          if (action.payload.index === index) {
            return {...timer, isRunning: !timer.isRunning}
          }
          return timer
        })
        return newState

      case RESET_TIMER:
        const resetState = state.map((timer, index) => {
            if (action.payload.index === index) {
                return {...timer, time: 0}
            }
            return timer;
        })
        return resetState;
      default:
        return state;
    }
  }
  
  export default timerReducer;
  
  
  