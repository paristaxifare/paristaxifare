import Ride from "./Ride"

const DisplayRide = (props)  => {

  return (
     <div>
     {props.taxis.map((item) => (
        <li key ={item.id}>
          <Ride id={item.id} 
                distance={item.distance}
                duration={item.duration} 
                startTime={item.startTime}/>
        </li>
        ))}
     </div>
  )
}

export default  DisplayRide;