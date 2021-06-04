// # Timer Actions

// Let's start by defining the actions before making the app!

// The app needs to do the following things with timers:

// - Add a new timer
// - Toggle a timer (start/stop)
// - Select a timer

// `ADD_TIMER` - Creating a timer will add a new timer object to an array of timer objects held by the store.

```js
export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name) => {
  return {
    type: NEW_TIMER,
    payload: { name }
  }
}
```

// `TOGGLE_TIMER` - Starts or stops a timer. 

