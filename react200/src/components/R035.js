import React,{useState, useEffect} from 'react';
import {Badge, Button} from 'reactstrap';

function R035(props){
	return(
		<div>
			<h1>product name <Badge color='secondary'>hit</Badge></h1>
			<Button color='light' outline>
				accessor <Badge color='dark'>
					4
				</Badge>
			</Button>
			<Badge color='danger' pill>pill</Badge>
			<Badge href='http://www.naver.com' color='light'>
				go link
			</Badge>
		</div>
	)
}

export default R035;