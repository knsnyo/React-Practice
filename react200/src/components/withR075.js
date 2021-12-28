import React, {useEffect} from 'react';

export default function withR075(InComponent, InComponentName){
	return function outComponent(props){
	  useEffect(()=>{
			console.log(`3. InComponentName: ${InComponentName}`);
		})
		console.log(`1. InComponent render`);
		return(
			<InComponent {...props}/>
		)
	}
}