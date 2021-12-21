import React, {useState, useEffect} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

function R055(){
	const[tab, setTab]=useState(1);

	useEffect(()=>{
		console.log(tab);
	});

	return(
		<>
		  <Nav tabs>
				<NavItem>
					<NavLink onClick={()=>setTab(1)}>first</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={()=>setTab(2)}>second</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={tab}>
				<TabPane tabId={1}><p>1</p></TabPane>
				<TabPane tabId={2}><p>2</p></TabPane>
			</TabContent>
		</>
	)
}

export default R055;