function CalculateEndTime(props){
    let startTime = new Date(props.startTime)
    console.log("startTime:" + startTime )
    let duration = props.duration
    let endTime = startTime
    endTime.setSeconds(endTime.getSeconds() + duration);
    startTime = new Date(props.startTime)
    console.log("endTime:" + endTime )
    return endTime;
  }

  export default CalculateEndTime 