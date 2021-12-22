import React from 'react';

const R068=()=>{
	return(
		<>
		  <div onMouseMove={(e)=>mouseMove('div')}>
				<h3>DIV onMouseMove</h3>
			</div>
			<input type='text' onMouseMove={(e)=>mouseMove('input')}/>
			<select onMouseMove={(e)=>mouseMove('select')}>
				<option value='react'>react</option>
				<option value='200'>200</option>
			</select>
		</>
	)
}

const mouseMove=(e)=>{
	console.log(`mouse move ${e}`);
}

export default R068;