import React, {useState} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function R050(){
	const[pagination, setPagination]=useState(1);
	return(
		<>
		  <Pagination size='lg' aria-label='Page nav example'>
				<PaginationItem>
					<PaginationLink previous onClick={(e)=>{setPagination(pagination-1)}}/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={(e)=>{setPagination(1)}}>1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={(e)=>{setPagination(2)}}>2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink previous onClick={(e)=>{setPagination(pagination+1)}}/>
				</PaginationItem>
			</Pagination>
		</>
	)
}

export default R050;