import React, {useState} from 'react';
import R077Child from './R077Child.js';

const {Provider, Consumer}=React.createContext();
export{Consumer};

export default function R077(props){
	const[state, setState]=useState('value')
	const content = { state, setState}
	return(
		<Provider value={content}>
			<R077Child/>
		</Provider>
	)
}