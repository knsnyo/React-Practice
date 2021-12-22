import React from 'react';

const R066=()=>{
	return(
		<>
		  <button onClick={(e)=>{click('Click button')}}>
				click button
			</button>
			<div onClick={(e)=>{click('Click div')}}>click div</div>
			<a href='#' onClick={(e)=>click('click a')}>click a</a>
		</>
	)
}

const click=(para)=>{
	if('string' != typeof para) para='Click a'
	console.log(`para: ${para}`);
}

export default R066;