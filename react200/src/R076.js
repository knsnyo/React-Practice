import React from 'react';
import R076Child from './R076Child';

const {Provider, Consumer}= React.createContext();
export {Consumer};

export default function R076(props){

	return(
		<Provider value='REACT 200'>
			<R076Child/>
		</Provider>
	)
}
