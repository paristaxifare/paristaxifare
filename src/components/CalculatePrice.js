import CalculateEndTime from './CalculateEndTime'

function CalculatePrice(props){
  console.log("props:" + props )
    let startTime = new Date(props.startTime)
    console.log("startTime:" + startTime )
    let duration = props.duration
    let endTime = CalculateEndTime(props)
    console.log("endTime:" + endTime )
    console.log("startTime:" + props.startTime )
    
    let startTimeHour = startTime.toString().match(/\d\d(?=:)/);
    console.log(startTimeHour[0]);
    let endTimeHour = endTime.toString().match(/\d\d(?=:)/);
    console.log(endTimeHour[0]);
    startTimeHour = startTimeHour[0];
    endTimeHour = endTimeHour[0];

    //Works if ride duration < 4h
    let night = (startTimeHour > 20 || startTimeHour < 6) ? 1 : 0
    let busy = (startTimeHour > 16 && startTimeHour < 19) ? 1 : 0
    
    let price = 1 + 2.5 * props.distance + 0.5 * night + 1 * busy
    console.log("ID:" + props.id )
    console.log("startTime:" + startTime )
    console.log("duration:" + duration )
    console.log("night:" + night )
    console.log("busy:" + busy )
    console.log("Price:" + price )

    return price;
  }
  
  export default CalculatePrice