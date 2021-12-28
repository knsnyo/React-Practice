import React from 'react';

const R070=()=>{
	return(
		<>
		  <div onMouseOut={()=>mouseOut("div")}>
				<h3>div mouseout</h3>
			</div>
			<input type='text' onMouseOut={()=>mouseOut('input')}/>
			<select onMouseOut={()=>mouseOut('select')}>
				<option value='react'>react</option>
				<option value='200'>200</option>
			</select>
		</>
	)
}

const mouseOut=(e)=>{
	console.log(`para: ${e}`);
}

export default R070;