import React, {useEffect} from 'react';

const R065=()=>{
	useEffect(()=>{
		new Promise((resolve, reject)=>{
			reject(Error('Error Info'));
		})
		.then(result=>{console.log(`then ${result}`)})
		.catch(result=>{console.log(`catch ${result}`)})
	})

	return(
		<h1>promise catch</h1>
	)
}

export default R065;