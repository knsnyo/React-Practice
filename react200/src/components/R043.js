import React, {useState} from 'react';
import { Button, Fade } from 'reactstrap';

function R043(props){
	const[fade, setFade]=useState(false);
	return(
		<div>
			<Button color='success' onClick={(e)=>setFade(!fade)}>
				Fade in / out
			</Button>
			<Fade in={fade} tag='h1'>
				hi
			</Fade>
		</div>
	)
}

export default R043;