import React from 'react';
import { UncontrolledCollapse, Button,
CardBody, Card } from 'reactstrap';

function R042(props){
	return(
		<div>
			<Button color='warning' id='toggle'>
				펼치기/접기
			</Button>
			<UncontrolledCollapse toggler='#toggle'>
				<Card>
					<CardBody>
						react 200
					</CardBody>
				</Card>
			</UncontrolledCollapse>
		</div>
	)
}

export default R042;