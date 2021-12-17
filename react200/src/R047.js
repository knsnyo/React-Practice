import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

function R047(){
	return(
		<>
		  <ListGroup>
				<ListGroupItem color='danger'
				className='justify-content-between'>
					Badge<Badge pill>200</Badge>
				</ListGroupItem>
				<ListGroupItem disabled tag='a' href='#0'>
					Disable
				</ListGroupItem>
				<ListGroupItem tag='a' href='http://www.naver.com'>
					Link
				</ListGroupItem>
				<ListGroupItem tag='button' action onClick={(e)=>alert('button')}>
					Button
				</ListGroupItem>
			</ListGroup>
		</>
	)
}

export default R047;