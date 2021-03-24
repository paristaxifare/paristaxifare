import Ride from "./Ride"

const DisplayRide = (props)  => {

  return (
     <div>
     {props.taxis.map((item) => (
        <div key ={item.id}>
          <Ride id={item.id} 
                distance={item.distance}
                duration={item.duration} 
                startTime={item.startTime}/>
        </div>
        ))}
     </div>
  )
}

export default  DisplayRide;