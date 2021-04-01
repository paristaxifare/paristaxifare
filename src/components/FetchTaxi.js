import React, { useState, useEffect} from "react";
import DisplayRide from './DisplayRide'

const FetchTaxi = ()  => {
  const  [hasError, setErrors] =  useState(false);
  const  [taxis,setTaxis ]= useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:8080/taxis");
    res
    .json()
    .then(res => setTaxis(res))
    .catch(err => setErrors(err));
}
  useEffect(() => {
    fetchData();
},[]);

  return (
    <div>        
          <DisplayRide taxis={taxis}/>
    </div>
  )
}

export default  FetchTaxi;