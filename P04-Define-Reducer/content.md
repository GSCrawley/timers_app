---
title: "Define Reducer"
slug: react-redux-timers-define-reducer
---

## Technical Planning

1. ~~Build a Timer object~~
1. ~~Define the Actions of a Timer~~
1. **Define the Reducers of a Timer**
    1. Determine how many reducers we need in order to accomplish our goals
    1. Build out a reducer for a selected timer
    1. Build out a reducer for an array of timers
1. Allow users to create a Timer
1. Allow users to see a list of Timers
1. Users should be able to start/stop the clock on their Timers
1. Style the app
1. Allow Timers to persist

Next we need to build a **reducer** to handle changes in state. Before we build them, let's briefly revisit what application state will look like.

# Store Review

The **store** is a JavaScript Object with properties and values. 

You could say each property on the store object is a 'pieces' of your overall application state. 

For this app we will put an array of timers on one piece of state, and the index of the selected timer on another piece of state. 

With this arrangement the store would look like this:

```JavaScript
{
  timers: [ Timer1, Timer2, Timer3, ... ],
  selectedTimer: 0
}
```

Values are assigned to each piece of state through a reducer. A reducer is a function that is responsible for making chnages to state. 

You'll need a reducer for each piece of state. Above we've defined two properties: `timers` and `selectedTimer` so we need a reducer for each. 

> [action]
>
> First create a folder to hold the reducers: `src/reducers`

# Selected Timer Reducer

The selectedTimer Reducer will need to set the `selectedTimer` to the
value passed in the `payload` of the `SELECT_TIMER` action.

> [action]
>
> Create a new file `src/reducers/selectedTimerReducer.js` with the following code:
>
```js
// Import the SELECT_TIMER action
import { SELECT_TIMER } from '../actions';
>
const selectedTimerReducer = (state = null, action) => {
  switch (action.type) {
    // On the SELECT_TIMER action, set the selectedTimer to the value passed in the payload
    case SELECT_TIMER:
      return state = action.payload.index;
>
    default:
      return state;
  }
}
>
export default selectedTimerReducer;
```

# References and Redux

The Timers Reducer has a bit more work to get up and running, since it's responsible for managing the array of Timer objects. Before we get started though, it is _critical_ to understand the difference between passing by reference vs. value.

## JavaScript Array Manipulation

Primitives (strings, numbers, booleans) are always stored as values, and when assigned, those values are **copied** (a new value is created).

Objects, Arrays, and Functions are **not copied when assigned to variables.** Instead a reference to the original is assigned. _When assigning an array to another variable both variables will reference the same array!_

Check out the example [here](https://repl.it/@MitchellHudson/Array-equivalency) to see this with real code!

**Understanding this is important to understanding JavaScript and Redux.**

**Redux requires a reducer to return a new object.** If a reducer returns the same object, Redux will not see a change and will not update views.

> [info]
>
> Why? Redux needs to see that the object has been changed. Objects are passed by reference, modifying an object doesn't create a new reference.

**Your reducers must return a new copy of `state` if `state` is an Object or Array.**

# Copying vs Mutating an Array in Redux

Many array methods mutate the original array. Some methods create a copy. You'll want to use these methods in your reducers.

## Copy an array

Copy an array with the spread operator `...`:

```JS 
const array = [1,2,4]
const newArray = [...array] 
```

Copy an array with `slice()`

```js
const array = [1,2,4]
const newArray = array.slice()
```

## Add a new item

Copy your array and add a new item with the spread operator:

```JavaScript
// Creates a new array
var newState = [...state, newItem];
```

Add a new item by copying the array with `Array.slice()` then adding a new item.

```JavaScript
// Creates a copy of state
var newState = state.slice();
newState.push(newItem);
```

## Insert a new item

Inserts a new item at index.

```JavaScript
var newState = [...state.slice(0, index), newItem, ...state.slice(index)];
```

If these topics are new for you, try some of these practice problems:

1. Create a new array and fill it with element using the spread operator.
2. Create a new array with the elements from state starting at 0 to index - 1
3. Inserts newItem at index.
4. Inserts the items from state starting at index after newItem.

## Copy an object in an array

Remember if you are modifying an object in an array you need to create a copy of that object!

Imagine state is an array of Objects with name and count `{name:"", count:0}`. You want to increase count for the object at index.

```JavaScript
var newState = state.map((item, i) => {
  if (i === index) {
    // Returns a new object with the values of item, and overwrites count with new value
    return {...item, count: item.count + 1};
  }                          
  return item;
})
```

If these topics are new for you, try some of these practice problems:

1. Use map to generate a new Array
2. Inside map look at each item and match it to index
3. Return a new Object where count has been incremented
4. Or, return the original item

# Timers Reducer

Alright, now we're ready to define a reducer for timers.

**Remember: Redux requires a reducer to return a new object.**

> [action]
>
> Create a new file: `src/reducers/timersReducer.js` with the following code:
>
```js
// Import all of our actions
import { NEW_TIMER, TOGGLE_TIMER } from '../actions';
import Timer from '../Timer'
>
const timersReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      // Add a new timer, return a copy of state
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)]
>
    case TOGGLE_TIMER:
      // Invert the isRunning property of timer at index, return a copy of state
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState
>
    default:
      return state;
  }
}
>
export default timersReducer;
```

# Combine and Export Reducers

While you have a reducer for each piece of state you need a root reducer to bring them all together. [combineReducers](https://redux.js.org/api/combinereducers) is used for this. 

> [action]
>
> Add a file `src/reducers/index.js` and add the following:
>
```js
import { combineReducers } from 'redux';
>
import timerReducer from './timersReducer';
import selectedTimerReducer from './selectedTimerReducer';
>
export default combineReducers({
  timers: timerReducer,              // array
  selectedTimer: selectedTimerReducer, // int/number
});
```

Import the reducers at the top of `App.js`. You also need [createStore](https://redux.js.org/api/createstore) from `redux` and [Provider](https://react-redux.js.org/api/provider) from `react-redux`.

> [action]
>
> Add the following to the top of `App.js`:
>
```js
...
>
import { createStore } from 'redux';
import { Provider } from 'react-redux';
>
import reducers from './reducers';
```
>
> Then create the store below all the import statements
>
```js
...
const store = createStore(reducers);
```

Finally, define the `Provider` component, which makes the Redux store available to all nested components.

> [action]
>
> Update your `App` component in `App.js`:
>
```js
function App() {
  return (
    <Provider store={store}>
      <h1>TMRZ</h1>
    </Provider>
  );
}
```

Your app should display the the heading: TMRZ. This doesn't look like much but you've actually done a lot laying down redux infastructure. The Actions and Reducers are ready to manage state in this application. 

Building out our reducers gave us some good practice with getting **further acquainted with the Flux pattern!** And now we're ready to move on and build out our React Components!

## Resources

- https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

# Now Commit

>[action]
>
```bash
$ git add .
$ git commit -m 'added Timer reducers'
$ git push
```
