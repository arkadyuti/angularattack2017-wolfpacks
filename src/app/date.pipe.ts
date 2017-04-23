import { Pipe } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe {
  transform(deliveryTime) {
    console.log("hey");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let hoursOk = "fail";
    let message = "";
    const timings = `${deliveryTime[0].hours}:${deliveryTime[0].minutes} to ${deliveryTime[1].hours}:${deliveryTime[1].minutes}`
    if(hours > deliveryTime[0].hours && hours < deliveryTime[1].hours) {
      hoursOk = "pass";
    }

    if(hours === deliveryTime[0].hours) {
      hoursOk = "equalBegin";
    }

    if(hours === deliveryTime[1].hours) {
      hoursOk = "equalEnd"
    }

    if(hoursOk === "equalBegin") {
      if(minutes > deliveryTime[0].minutes) {
        hoursOk = "pass";
      }
    }

    if(hoursOk === "equalEnd") {
      if(minutes < deliveryTime[1].minutes) {
        hoursOk = "pass";
      }
    }

    if(hoursOk === "pass") {
      message = `Open from ${timings} hrs`
    } else {
      message = `Closed. It is only open from ${timings} hrs.`
    }
    return message;
  }
}
