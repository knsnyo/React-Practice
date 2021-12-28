import React from 'react';

export default function R074(){
	return(
		<>
		  <input type='button' value='number plus'
			onClick={()=>alert(plus(100))}/>
			<input type='button' value='string plus'
			onClick={()=>alert(plus('react'))}/>
		</>
	)
}

const plusNumOrString=(a, b)=>{
	return a+b;
}

const plus2=a=>b=> plusNumOrString(a,b);

const plus=e=>{
	return plus2(e)(200)
}