import React,{ useState, useEffect } from 'react';
import { ButtonDropdown, DropdownToggle,
DropdownMenu, DropdownItem } from 'reactstrap';

function R037(props){
	const [dropdown_open, setDropdownOpen]=useState(false);

	useEffect(()=>{
		console.log('useEffect');
	})

	return(
		<ButtonDropdown isOpen={dropdown_open} toggle={()=>setDropdownOpen(!dropdown_open)}>
			<DropdownToggle caret>Button Dropdown</DropdownToggle>
			<DropdownMenu>
				<DropdownItem header>HEADER</DropdownItem>
				<DropdownItem disabled>disalbe button</DropdownItem>
				<a href="http://www.naver.com">
					<DropdownItem>go naver web site</DropdownItem>
				</a>
				<DropdownItem onClick={e=>alert('alert button')}>
					alert button
				</DropdownItem>
			</DropdownMenu>
		</ButtonDropdown>
	)
}

export default R037;