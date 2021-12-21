import React, {useEffect} from 'react';

function R059(){
	useEffect(async()=>{
		const response=await fetch('http://date.jsontest.com/');
		const body=await response.json();
		alert(body.date);
	}, [])

	return(
		<h1>fetch get</h1>
	)
}

export default R059;