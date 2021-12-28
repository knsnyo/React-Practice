import React from 'react';
import Swal from 'sweetalert2'

function R058(){
	const deleteAlert=(e)=>{
		Swal.fire({
			title: 'really delete?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#4B088A',
			cancelButtonColor: '#01DF01',
			confirmButtonText: 'yes',
			cancelButtonText: 'no',
		}).then((result)=>{
			if(result.value){
				document.getElementById('deleteId').remove();
				Swal.fire(
					'Deleted',
					'sweetalert2 delete completed',
					'success'
				)
			}
		})
	}

	return(
		<>
		  <h1 id='deleteId'>sweetalert2</h1>
			<button onClick={(e)=>deleteAlert()}>delete</button>
		</>
	)
}

export default R058;