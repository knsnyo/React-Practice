import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup } from 'reactstrap';

function R038(props){
	const [num, setNum]=useState(10);
	return(
		<div sytle={{padding: '0px'}}>
			<ButtonGroup style={{padding: '0px'}}>
				<Button onClick={e=>setNum(num-1)}>left</Button>
				<Button onClick={e=>setNum(10)}>reset</Button>
				<Button onClick={e=>setNum(num+1)}>right</Button>
			</ButtonGroup>
			<br/>
			{num}
		</div>
	)
}

export default R038;