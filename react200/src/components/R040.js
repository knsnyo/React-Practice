import React, {useState, useEffect} from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
}from 'reactstrap';

function R040(props){
	return(
		<div>
			<Card>
				<CardImg top heigth='200px' src="http://bitly.kr/4KkfRxZfR"
				alt='Card Image'/>
				<CardBody>
					<CardTitle>Card Title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Lorem</CardText>
					<Button>button</Button>
				</CardBody>
			</Card>
		</div>
	)
}

export default R040;