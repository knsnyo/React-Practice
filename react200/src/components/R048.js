import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function R048(){
	const [modal_state, setModalState]=useState(false);

	return(
		<>
		  <Button color='warning' onClick={()=>setModalState(!modal_state)}>modal button</Button>
			<Modal isOpen={modal_state} fade={true} toggle={()=>setModalState(!modal_state)}>
				<ModalHeader toggle={modal_state}>Modal Header</ModalHeader>
				<ModalBody>
					Any sentence
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={()=>setModalState(!modal_state)}>ok</Button>
					<Button color='secondary' onClick={()=>setModalState(!modal_state)}>cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default R048;