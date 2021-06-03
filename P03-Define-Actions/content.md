---
title: "React Redux Timers - Defining Actions"
slug: react-redux-timers-defining-actions
---

## Technical Planning

1. ~~Build a Timer object~~
1. **Define the Actions of a Timer**
    1. Review how actions and action creators work in Flux and Redux
    1. Define what we want a Timer to be able to do
    1. For each action, define a Redux action and action creator
1. Define the Reducers of a Timer
1. Allow users to create a Timer
1. Allow users to see a list of Timers
1. Users should be able to start/stop the clock on their Timers
1. Style the app
1. Allow Timers to persist

## Defining Actions

The Flux pattern and Redux require that
you define **actions** that describe how data can be modified. A few key points around actions:

1. **Data can only be modified through actions.**
1. Each action should be defined as a `const` with string value.
1. Each action needs an **action creator**

But wait, we just covered actions, what's an action creator? An action creator is a _function that returns an object with a **type**, and a **payload** when a value needs to accompany the action._

For example, a `SELECT_BOOK` action creator might look like this:

```js
export const selectBook = (index) => {
  return {
    type: SELECT_BOOK,
    payload: { index }
  }
}
```

# Timer Actions

Let's start by defining the actions before making the app!

The app needs to do the following things with timers:

- Add a new timer
- Toggle a timer (start/stop)
- Select a timer

First we need a place to store all these actions:

> [action]
>
> Create the folder `src/actions`, and then add this file: `src/actions/index.js`.

All actions are going to be defined within `src/actions/index.js`.

Let's build each of these out, action by action:

# Add Timer

`ADD_TIMER` - Creating a timer will add a new timer object to an array of timer objects held by the store.

> [action]
>
> Add the following to `src/actions/index.js`:
>
```js
export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name) => {
  return {
    type: NEW_TIMER,
    payload: { name }
  }
}
```

# Toggle Timer

`TOGGLE_TIMER` - Starts or stops a timer. This requires the
index of the timer.


> [action]
>
> Add the following to `src/actions/index.js`:
>
```js
export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const toggleTimer = (index) => {
  return {
    type: TOGGLE_TIMER,
    payload: { index }
  }
}
```

# Select Timer

`SELECT_TIMER` - Selects a timer. Selecting a timer will
display details about that timer. This requires the index
of the timer.

> [action]
>
> Add the following to `src/actions/index.js`:
>
```js
export const SELECT_TIMER = 'SELECT_TIMER'
export const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: { index }
  }
}
```

# Why make a variable for each action name? 

These action names are all stored as strings. You'll be referencing them in more than one place in your app. By defining the vairable the value appears only in a single location and can easily be changed. Exporting the variable from this file allows the code editor to catch errors and prevents us from making spelling mistakes. 

We're now well on our way to **building React components and managing state using the Flux pattern**, but we've got some work to do before we're finished.

# Now Commit

>[action]
>
```bash
$ git add .
$ git commit -m 'added Timer actions'
$ git push
```
