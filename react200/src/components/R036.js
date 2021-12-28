import React,{ useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function R036(props){
	return(
		<div id='top'>
			<Breadcrumb tag='nav' listTag='div'>
				<BreadcrumbItem tag="a" href='#top'>
					go_top
				</BreadcrumbItem>
				<BreadcrumbItem tag='a' href='#bottom'>
					go_bottom
				</BreadcrumbItem>
				<div id='bottom' style={{marginTop:'1000px'}}>
					<span>bottom</span>
				</div>
			</Breadcrumb>
		</div>
	)
}

export default R036;