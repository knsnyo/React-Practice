import React from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';


function R045(props){
	return(
		<>
		  <InputGroup>
			  <Input placeholder='user ID'/>
				<InputGroupText>@reactmail.com</InputGroupText>
			</InputGroup>
			<InputGroup>
				<Button>BUTTON</Button>
				<Input/>
			</InputGroup>
		</>
	)
}

export default R045;
