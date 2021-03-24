import CalculateEndTime from './CalculateEndTime'

function RideAlert(props) {
  let endTime = CalculateEndTime(props)
  let duration = new Date(props.duration * 1000).toISOString().substr(11, 8)
  alert("Duration: " + duration + "\n\n ETA: " + endTime);
}

  export default RideAlert