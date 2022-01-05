import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

export default () => {
  const callApi = async () => {
    axios.get("/api")
    .then((res) => {
      console.log(res.data.test)
    })
  }

  useEffect(()=>{
    callApi();
  }, []);

  return(
    <div>
      test
    </div>
  )
}