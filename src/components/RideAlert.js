import CalculateEndTime from './CalculateEndTime'

function RideAlert(props) {
  const endTime = CalculateEndTime(props)
  const duration = new Date(props.duration * 1000).toISOString().substr(11, 8)
  alert("Duration: " + duration + "\n\n ETA: " + endTime);
}

  export default RideAlert