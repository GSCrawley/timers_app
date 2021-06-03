---
title: "Timer Object"
slug: react-redux-timers-timer-object
---

## Technical Planning

1. **Build a Timer object**
    1. Create a Timer Class
    1. Assign name, time, and isRunning properties to the class
1. Define the Actions of a Timer
1. Define the Reducers of a Timer
1. Allow users to create a Timer
1. Allow users to see a list of Timers
1. Users should be able to start/stop the clock on their Timers
1. Style the app
1. Allow Timers to persist

## Defining the Timer Object

The app will create and store Objects that define a timer. Timer objects will have the following properties that will define it:

- **name:** String - the name of the timer
- **time:** Number - the time in milliseconds
- **isRunning:** Boolean - tracks whether the timer is running or paused

You can add more properties to expand the functionality of the app. For example you might have `billable`, and rate if the app was used for business.

JavaScript only has one `Object` type. It has many ways to create objects. For this tutorial we will be using the class syntax. This will follow the same coding style used for creating React components.

# Creating Classes

You can define a class using the `class` keyword. *Class names by convention
always start with an uppercase letter.* You can initialize the properties of a class in it's constructor function.

> [action]
>
> In your `src` folder, create a `Timer.js` file and write the `Timer` class with the following properties:
>
```js
class Timer {
  // The name property is passed into the constructor and the class is initialized.
  constructor(name) {
    this.name = name;
    this.time = 0;
    this.isRunning = false;
  }
}

export default Timer;
```

Below is an example on how to create an instance of `Timer`:

```js
var myTimer = new Timer('Workout');
```

Great work, this is just the beginning of **defining class objects to utilize in an OOP paradigm!** We'll build upon this throughout the tutorial.

## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

# Now Commit

>[action]
>
```bash
$ git add .
$ git commit -m 'added Timer class'
$ git push
```
