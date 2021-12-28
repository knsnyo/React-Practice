import React from 'react';

const R069=()=>{
	return(
		<>
		  <div onMouseOver={(e)=>mouseOver('div')}>
				<h3>div mouseover</h3>
			</div>
			<input type='text' onMouseOver={(e)=>mouseOver('input')}/>
			<select onMouseOver={(e)=>mouseOver('select')}>
				<option value='react'>react</option>
				<option value='200'>200</option>
			</select>
		</>
	)
}

const mouseOver=(e)=>{
	console.log(`para: ${e}`);
}

export default R069;