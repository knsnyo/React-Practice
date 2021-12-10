import React, {useState, useEffect} from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items=[
	{
		src: 'http://bitly.kr/QUnjzAodA',
		altText: 'alert image1',
		caption: 'slide content1',
		hearder: 'slide title1'
	},
	
	{
		src: 'http://bitly.kr/QUnjzAodA',
		altText: 'alert image2',
		caption: 'slide content2',
		hearder: 'slide title2'
	}
];

function R041(props){
	return(
		<UncontrolledCarousel items={items}/>
	)
}

export default R041;