import React, {useEffect} from 'react';
import Swal from 'sweetalert2';

function R056(){
	useEffect(()=>{
		Swal.fire('1. sweetalert').then(result=>{
			alert('2. result.value')
		})
	}, []);

	return(
		<h1>sweet alert 2</h1>
	)
}

export default R056;