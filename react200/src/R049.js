import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
Nav, NavItem, NavLink } from 'reactstrap';

function R049(){
	const[collapsed_state, setCollapsedState]=useState(false);
	return(
		<>
		  <Navbar color='faded' light>
				<NavbarBrand href='/' className='mr-auto'>Navbar</NavbarBrand>
				<NavbarToggler onClick={()=>{setCollapsedState(!collapsed_state)}} className='mr-2'/>
				<Collapse isOpen={collapsed_state} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href='#'>react</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://www.naver.com'>naver</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default R049;