import React from 'react'
import { throttle } from 'lodash'

export default () => {
	return(
		<>
		  <h2>검색창</h2>
			<input type='text' onChange={throttleFunction}/>
		</>
	)
}

const throttleFunction = throttle(()=>{
	console.log('throttle api ')
}, 1000)