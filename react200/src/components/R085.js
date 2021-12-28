import React, { useEffect } from 'react'
import cookie from 'react-cookies'

export default () => {
	useEffect(()=>{
		const expires = new Date();
		expires.setMinutes(expires.getMinutes + 60);
		cookie.save('userid', 'react200', {
			path: '/',
			expires,
			//secure: true,
			//httpOnly: true,
		})
	}, []);

	return(
		<h3>
			react-cookies Save
		</h3>
	)
}