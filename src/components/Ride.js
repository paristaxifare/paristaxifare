import React, { useState } from 'react'; 
import styled from 'styled-components';
import CalculatePrice from './CalculatePrice';
import RideAlert from './RideAlert'

const Button = styled.button`
    background-color: ${props => props.distance > 2 ? 'darkred' : 'black'};
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    `;

  function Ride(props) {
  
    const [clicked, setClicked] = useState("");

    const changeClicked = () => setClicked("Clicked");

    return (
      <div>
        <Button onClick={() => 
          {
            RideAlert(props); 
            changeClicked() 
          }} 
          distance={props.distance}
        >
          Taxi n°{props.id}  Price: {CalculatePrice(props)} {clicked} 
        </Button>
      </div>    
      );
  }

  export default Ride