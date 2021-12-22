import React from 'react';

export default function R071(){
	return(
		<>
		  onKeyDown: <input type='text'
			onKeyDown={(e)=>onKey('onKeyDown', e)}/><br/>
			onKeyPress: <input type='text'
			onKeyPress={(e)=>onKey('onKeyPress', e)}/><br/>
			onKeyUp: <input type='text'
			onKeyUp={(e)=>onKey('onKeyUp', e)}/><br/>
		</>
	)
}

const onKey=(event ,e)=>{
	var val=e.target.value;
	console.log(`event: ${event}, value: ${val}`);
}
