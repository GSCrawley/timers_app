// # Timer Actions

// Let's start by defining the actions before making the app!

// The app needs to do the following things with timers:

// - Add a new timer
// - Toggle a timer (start/stop)
// - Select a timer

// `ADD_TIMER` - Creating a timer will add a new timer object to an array of timer objects held by the store.

export const UPDATE = "UPDATE"
export const update = (deltaTime) => {
    return {
      type: UPDATE,
      payload: { deltaTime }
    }
  }

export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name) => {
  return {
    type: NEW_TIMER,
    payload: { name }
  }
}

// `TOGGLE_TIMER` - Starts or stops a timer. 

export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const toggleTimer = (index) => {
  return {
    type: TOGGLE_TIMER,
    payload: { index }
  }
}


// `SELECT_TIMER` - Selects a timer. Selecting a timer will
// display details about that timer. This requires the index
// of the timer.

export const SELECT_TIMER = 'SELECT_TIMER'
export const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: { index }
  }
}


