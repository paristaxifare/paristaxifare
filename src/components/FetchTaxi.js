import React, { useState, useEffect} from "react";
import DisplayRide from './DisplayRide'

const FetchTaxi = ()  => {
  const  [hasError, setErrors] =  useState(false);
  const  [taxis,setTaxis ]= useState([]);

  async function fetchData() {
    const res = await fetch("https://test001.free.beeceptor.com/taxis");
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