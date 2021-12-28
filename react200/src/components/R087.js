import React, { useEffect } from "react";
import cookie from "react-cookies";

export default () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes + 60);
    cookie.save("userid", "react200", {
      path: "/",
      expires,
    });
  }, []);

	// promise, then이 낫지 않을까?
  setTimeout(() => {
    alert(cookie.load("userid"));
  }, 3000)
	setTimeout(() => {
    cookie.remove("userid", { path: "/" });
  }, 6000)
	setTimeout(() => {
    alert(cookie.load("userid"));
  }, 9000)

  return(
		<h3>react-cookie save and load and delete</h3>
	)
};
