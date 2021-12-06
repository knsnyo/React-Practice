import React,{useState, useEffect} from 'react';
import{Alert, UncontrolledAlert} from 'reactstrap';

function R034(props){
	return(
		<div>
		  <Alert color='light'>
				Alert [color: light]
			</Alert>
			<UncontrolledAlert color='warning'>
				UncontrolledAlert [color: warning]
			</UncontrolledAlert>
		</div>
	)
}

export default R034;