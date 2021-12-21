import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

function R051(){
	return(
		<>
		  <Button id='popover_id' type='button'>
				POP OVER BUTTON
			</Button>
			<UncontrolledPopover placement='right' target='popover_id'>
				<PopoverHeader>REACT 200</PopoverHeader>
				<PopoverBody>anything</PopoverBody>
			</UncontrolledPopover>
		</>
	)
}

export default R051;