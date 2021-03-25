import CalculateEndTime from './CalculateEndTime'

function CalculatePrice(props){
  console.log("props:" + props )
    const startTime = new Date(props.startTime)
    const endTime = CalculateEndTime(props)

    
    let startTimeHour = startTime.toString().match(/\d\d(?=:)/);
    let endTimeHour = endTime.toString().match(/\d\d(?=:)/);
    startTimeHour = startTimeHour[0];
    endTimeHour = endTimeHour[0];

    const night = (startTimeHour > 20 || startTimeHour < 6) ? 1 : 0
    const busy = (startTimeHour > 16 && startTimeHour < 19) ? 1 : 0
    
    const price = 1 + 2.5 * props.distance + 0.5 * night + 1 * busy

    return price;
  }
  
  export default CalculatePrice