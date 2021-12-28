import React, {useState, useEffect} from 'react';
import { Progress } from 'reactstrap';

function R052(){
	const [progress, setProgress]=useState(0);
	
	// 이거 배워야 함.
	useEffect(()=>{
		progressbar();
	})

	const progressbar=()=>{
		if(100!==progress){
			setTimeout(()=>{
				setProgress(progress+1);
			}, 100);
		}
	}

	return(
		<>
		  <Progress color='info' value={progress}>
				{progress}%
			</Progress>
			<br/>
			<Progress multi>
				<Progress bar color='warning' value='25'>25%</Progress>
				<Progress bar color='success`' value='35'>35%</Progress>
				<Progress bar color='warning' value='15'>15%</Progress>
				<Progress bar color='danger' value='25'>25%</Progress> 
			</Progress>
		</>
	)
}

export default R052;