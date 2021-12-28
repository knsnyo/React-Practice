import React,{useState, useEffect} from 'react';

function R033(props){
	const element_arr=[
		<li>REACT</li>,
		<li>200</li>,
		<li>Array Map</li>
	];
	return(
		<ul>
			{element_arr.map((arr_val)=>arr_val)}
		</ul>
	)
}

export default R033;