import CalculateEndTime from './CalculateEndTime'

function CalculatePrice(props){
  console.log("props:" + props )
    let startTime = new Date(props.startTime)
    let endTime = CalculateEndTime(props)

    
    let startTimeHour = startTime.toString().match(/\d\d(?=:)/);
    let endTimeHour = endTime.toString().match(/\d\d(?=:)/);
    startTimeHour = startTimeHour[0];
    endTimeHour = endTimeHour[0];

    let night = (startTimeHour > 20 || startTimeHour < 6) ? 1 : 0
    let busy = (startTimeHour > 16 && startTimeHour < 19) ? 1 : 0
    
    let price = 1 + 2.5 * props.distance + 0.5 * night + 1 * busy

    return price;
  }
  
  export default CalculatePrice