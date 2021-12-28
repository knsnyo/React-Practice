import React from 'react';

export default function R072(){
	return(
		<>
  		<form onSubmit={(e)=>submit(e)}>
        <input type='text' name='input_name' id='input_id'/>
				<input type='submit' value='submit'/>
	  	</form>
		</>
	)
}

const submit=(e)=>{
	var input_value=document.getElementById('input_id').value;
	console.log(`input_value: ${input_value}`);
	e.preventDefault();
}