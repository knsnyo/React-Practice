import React from 'react';
import {Consumer} from './R077';

export default function R077Child(props){
	return(
		<Consumer>
			{(contextValue)=>
			<button onClick={()=>contextValue.setState('react200')}>
			  {contextValue.state}_button
			</button>
		  }
		</Consumer>
	)
}