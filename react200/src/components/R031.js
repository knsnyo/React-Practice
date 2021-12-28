import React,{useState, useEffect} from 'react';

function R031(props){
	const[contents, setContent]=useState('This is REACT');

	useEffect(()=>{
		console.log('useEffect');
	});

	return(
		<div style={{padding:'0px'}}>
			<h2>{contents}</h2>
			<button onClick={()=>setContent('This is HOOK')}>
				button
			</button>
		</div>
	)
}

export default R031;