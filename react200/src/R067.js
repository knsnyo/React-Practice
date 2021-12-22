import React from 'react';

const R067=()=>{
	return(
		<>
		  <input type='text' onChange={(e)=>change('input')}/>
			<select onChange={(e)=>change('select')}>
				<option value='react'>react</option>
				<option value='200'>200</option>
			</select>
		</>
	)
}

const change=(e)=>{
	var val=e.target.value;
	console.log(`val: ${val}`);
}

export default R067;