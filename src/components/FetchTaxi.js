import React, { useState, useEffect} from "react";
import DisplayRide from './DisplayRide'

const FetchTaxi = ()  => {
  const  [hasError, setErrors] =  useState(false);
  const  [taxis,setTaxis ]= useState([]);

  async function fetchData() {
    const res = await fetch("https://api.mocki.io/v1/137f4ea6");
    res
    .json()
    .then(res => setTaxis(res))
    .catch(err => setErrors(err));

    console.log("FETCH")
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