import React from 'react'

export default function R073(){
	return(
		<>
		  <input id='id' type='text' ref={inputRef}/>
			<input type='button' value='refFocus' onClick={(e)=>refFocus(e)}/>
			<input type='button' value='javascript' onClick={(e)=>javascriptFocus(e)}/>
		</>
	)
}

const inputRef=React.createRef();
const refFocus=e=>{
	inputRef.current.focus();
}
const javascriptFocus=e=>{
	document.getElementById('id').focus();
}