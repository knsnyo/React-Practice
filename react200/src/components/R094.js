import React from 'react'
import { debounce } from 'lodash'

export default () => {
	return(
		<>
		  <h2>검색창</h2>
			<input type='text' onChange={debounceFunction}/>
		</>
	)
}

const debounceFunction = debounce(()=>{
	console.log("Debounce API")
}, 1000)