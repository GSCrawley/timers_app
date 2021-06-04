import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// We need to import our action to add a new timer
import { addTimer } from '../actions'
import './NewTimer.css'

export default function NewTimer() {
	const [ name, setName ] = useState('')
	const dispatch = useDispatch()

    return (
		<div className="NewTimer">
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