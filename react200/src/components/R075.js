import React from 'react';
import withR075 from './withR075';

function R075(props){
	console.log(`2. HocComponent render()`);
	return(
		<h2>porps.name: {props.name}</h2>
	)
}

export default withR075(R075, 'R075');