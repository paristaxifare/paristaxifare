function CalculateEndTime(props){
    const startTime = new Date(props.startTime)
    console.log("startTime:" + startTime )
    const duration = props.duration
    const endTime = startTime
    endTime.setSeconds(endTime.getSeconds() + duration);
    console.log("endTime:" + endTime )
    return endTime;
  }

  export default CalculateEndTime 