---
title: "Create New Timers"
slug: react-redux-timers-create-new-timers
---

So far we have been working on getting Redux and React up and
running and no work has gone into components, which is the heart of React!

With actions and reducers in place you can now create
containers/components that display state from the store and
send actions to update the store. Let's get those working!

## Technical Planning

1. ~~Build a Timer object~~
1. ~~Define the Actions of a Timer~~
1. ~~Define the Reducers of a Timer~~
1. **Allow users to create a Timer**
    1. Create a `new-timer` component
    1. Allow that component to use the addTimer action
    1. Allow for input of a name for the timer
    1. Save the name of the timer
    1. Build a button to allow the user to add a timer
1. Allow users to see a list of Timers
1. Users should be able to start/stop the clock on their Timers
1. Style the app
1. Allow Timers to persist

# New Timer Component

The first component we'll build is for creating new timers. The new timer component should have the following:

- A field to input a name
- A button to save the timer

> [info]
>
> The above field that will allow users to input a name is a **controlled component**. This is when "the React component that renders [an input] also controls what happens in that form on subsequent user input."
>
> You can read more about controlled components [here](https://reactjs.org/docs/forms.html#controlled-components)

Keep in mind that we won't see timers until the Timer list component is created, which will be built in the next chapter.

> [action]
>
> Create a new folder in `src` called `components`. Now within this folder, create a `NewTimer.js` file which will house our new-timer component
>
> Fill in `/src/components/NewTimer.js` with the following starter code
>
```js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
>
// We need to import our action to add a new timer
import { addTimer } from '../actions'
>
export default function NewTimer() {
	const [ name, setName ] = useState('')
	const dispatch = useDispatch()
>
	return (
		<div>

		</div>
	)
}
```

You now have a basic `NewTimer` component structure, but we have no idea how to render it! Remember we want to have the following:

- A field to input a name
- A button to save the timer

Let's build that out in the render function:

> [action]
>
> Fill in the `render` method in `/src/components/NewTimer.js`, as well as adding a few other ancillary methods and an export statement:
>
```js
export default function NewTimer() {
	const [ name, setName ] = useState('')
	const dispatch = useDispatch()
>
	return (
		<div>
			<input
				type='text'
				placeholder="New Timer Name"
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}/>
			<button
				onClick={() => dispatch(addTimer(name))}
			>Save</button>
		</div>
	)
}
```

- UseDispatch - will give you access to the Redux store and allow your component to send actions when you need to update the store.
- useState - is used to create a value that will be available across multiple renders of this component. 

First React component in the bag! Great work on **building a react component using JSX syntax**, as well as getting more practice **managing application state**. But we can't stop here, let's build another component!

# Now Commit

>[action]
>
```bash
$ git add .
$ git commit -m 'added new timer input'
$ git push
```
