import React from 'react'
import { useSelector } from 'react-redux'
// import { selectTimer } from '../actions'
import TimerView from './TimerView'

export default function ListTimers() {
	const timers = useSelector(state => state.timers)

	return (
		<div>
			{timers.map((timer, i) => {
				// Here the render method maps `this.props.timers` to:
				return (
					<TimerView 
						key={`timer-${i}`} 
						timer={timer} 
						index={i} 
					/>
				)
			})}
		</div>
	)
}