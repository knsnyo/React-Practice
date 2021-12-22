import React from 'react';
import {Consumer} from './R076';

export default function R076Child2(props){
	return(
		<Consumer>
			{contextValue=><h3>{`contextValue: ${contextValue}`}</h3>}
		</Consumer>
	)
}