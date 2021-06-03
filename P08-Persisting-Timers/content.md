---
title: "Persisting Timers"
slug: react-redux-timers-persisting-timers
---

## Technical Planning

1. ~~Build a Timer object~~
1. ~~Define the Actions of a Timer~~
1. ~~Define the Reducers of a Timer~~
1. ~~Allow users to create a Timer~~
1. ~~Allow users to see a list of Timers~~
1. ~~Users should be able to start/stop the clock on their Timers~~
1. ~~Style the app~~
1. **Allow Timers to persist**
    1. Load and save state between the Store and Local Storage
    1. Throttle the save to local storage to improve performance

Our timers are working, they're styled and looking fly, but they still don't quite do one thing yet: persist! If you refresh the page, or open a new tab on `localhost`, the timers disappear.

In this last chapter, we'll fix that by persisting the timers with local storage.

# Overview

Before you begin, let's take inventory of a few things:

1. The Redux store is a JavaScript Object.
1. Local storage only allows for strings.
1. Therefore, _if we can convert the Redux store to JSON, it would be possible to convert the store to local storage and back._

JSON is JavaScript Object Notation. It's a string format that represents a JavasScript object. You can use it as a JS object in most cases and JS objects will convert to JSON most of the time. 

When does it not work? If you're Object contains values that things other than: Strings, Numbers, Arrays, or Objects. What else is left? functions and classes! An Object that contains a function can't be converted to JSON. 

# Save and Retrieve the store

First step is to define a key to be used with local storage. Next we need to define two methods to load and save state from local storage.

Since it's not related to a a specific component, action, or reducer, our `utils` folder feels like a good place to put this.

> [action]
>
> Add the following to the top of the `/src/utils/index.js` file:
>
```js
const TMRZ_STATE = "TMRZ_STATE"
>
// Load State
export const loadState = () => {
  try {
  // Grab the state from local storage
    const serializedState = localStorage.getItem(TMRZ_STATE)
    if (serializedState === null) {
      return undefined
    }
    // convert the string into JSON for the Redux store
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}
>
// Save State
export const saveState = (state) => {
  try {
    // convert the state from JSON, into a string
    const serializedState = JSON.stringify(state)
    // save the state to local storage
    localStorage.setItem(TMRZ_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}
...
```

To persist state subscribe to changes from the `store` in `App.js`. 

> [action]
>
> Import the methods from `/util` and add the following code to `App.js`. **note:** you need to replace the existing definition of `store` with the following:
>
```js
import { loadState, saveState } from './utils'
>
...
>
const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})
```

# Needs More Throttle

In this arrangement `saveState()` is being called each time the store changes. Since the timers update the store every 50ms, this could cause performance issues if we're writing to local storage every 50ms as well. We can solve this with a **throttling method**. This is a method that limits the calls to other methods over time.

It might be possible to improve performance by throttling calls to `saveState()`. [Lodash](https://lodash.com/) has a throttle method we can use to help us out.

> [action]
>
> Install Lodash via npm:
>
```bash
$ npm i --save lodash
```

Lodash has many methods. By default we will get the whole library, but let's just import only the part that we need, in this case `throttle`.

> [action]
>
> import lodash's throttle method into `App.js`
>
```js
import throttle from 'lodash/throttle'
```

Finally, let's tell our store to save state every 1000ms using Lodash's throttle method:
> [action]
>
> Replace the current `store.subscribe` call with the following in `App.js`:
>
```js
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));
```

Now the timers are updating every 50ms, but state is only being written to local store every 1000ms.

Try refreshing the tab or opening a new tab on `localhost` and see your timers persist!

Congrats! We got some practice managing local storage in the context of **managing application state through the Flux pattern!** Not to mention some pretty sweet timers to boot.

As you go through this FEW course, try to tie the concepts you learned here into the course material. The foundational work here on building React apps will be used to make bigger and bolder apps down the road!

# Now Commit

>[action]
>
```bash
$ git add .
$ git commit -m 'persisting timers'
$ git push
```

# Further challenges 

This app is small in scope but covers a wide range of technologies and has room to expand. Here are some ideas that you can explore. 

- The styles and uder interface could use improvements. Each peice of the interface is built as a component and each component has it's own stylesheet. 
- The state of each timer is on state and available to each component. It's possible to use this to change the appearance of each component. Imagine the start/stop button appears Green when it says "Start" and red when says "stop".
- Timers have a title and a time. It might be good if they had description below the title. To do this you'll need to modify the application state and interface. 
  - Add a new input for the description
  - The Timer class stores the title and time you'll need to expand this to support a description property. 
  - When creating a new Timer you're calling the NEW_TIMER/addTimer action you'll need to pass the description through here. 
  - A timer is created in the timerReducer modify this to add the new description. 
- It might be useful to have a reset button to reset a timer back to 0 for some uses.
  - Add a button to the TimerView
  - Create a new action RESET_TIMER and action creator function resetTimer.You'll need the index of the timer. Follow the pattern used by the start/stop buttons. 
  - Dispatch this action from your button.
  - Handle thie action in your timersReducer. 
- The times on all of the timers is data and reprents how much time was measured in a range of categories. You can create a new component to display this. Imagine a graph or a pie/donut chart showing the amount of time spent on each category. 

# Feedback and Review - 2 minutes

**We promise this won't take longer than 2 minutes!**

Please take a moment to rate your understanding of learning outcomes from this tutorial, and how we can improve it via our [tutorial feedback form](https://goo.gl/forms/uytCya0slBpsOXPf2)

This allows us to get feedback on how well the students are grasping the learning outcomes, and tells us where we can improve the tutorial experience.
