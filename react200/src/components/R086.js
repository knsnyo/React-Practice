import React, { useEffect } from 'react'
import cookie from 'react-cookies'

export default () => {
	useEffect(()=>{
		const expires = new Date()
		expires.setMinutes(expires.getMinutes + 60)
		cookie.save('useid', 'react200', {
			path: '/',
			expires,
		})
	}, [])
	setTimeout(()=>{
		alert(cookie.load('userid'))
	}, 1000)

	return(
		<h3>
			react-cookie save and load
		</h3>
	)
}