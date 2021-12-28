import React, {useEffect} from 'react';

const R063=()=>{
	useEffect(()=>{
		logPrint(1, (return1)=>{
			console.log(`return1: ${return1}`);
			logPrint(return1, (return2)=>{
				console.log(`return2: ${return2}`)
			})
		})
	})

	return(
		<h1>callback</h1>
	)
}

const logPrint=(para, callback)=>{
	console.log(`logPrint para: ${para}`);
	para+=para;
	callback(para);
}

export default R063;