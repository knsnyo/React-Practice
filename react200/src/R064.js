import React, {useEffect} from 'react';

const R064=()=>{
	useEffect(()=>{
		new Promise((resolve)=>{
			setTimeout(()=>{
				resolve('react');
			}, 1500);
		})
		.then((result)=>{
			console.log(result);
			return result+200;
		})
		.then((result)=>{
			console.log(result);
		})
	})

	return(
		<h1>promise</h1>
	)
}

export default R064;