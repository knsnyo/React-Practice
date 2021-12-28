import React from 'react';
import Swal from 'sweetalert2';

function R057(){
	const saveAlert=(flag, positionflage, e)=>{
		Swal.fire({
			position: positionflage,
			icon: 'success',
			title: `${flag} success`,
			showConfirmbutton: false,
			timer: 1500
		})
	}

	return(
		<>
		  <h1>sweetalert2</h1>
			<button onClick={()=>saveAlert('save', 'center')}>
				save
			</button>
			<button onClick={()=>saveAlert('crystal', 'bottom-end')}>
				modify
			</button>
		</>
	)
}

export default R057;