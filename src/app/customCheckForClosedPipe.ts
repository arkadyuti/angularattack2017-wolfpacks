import { Pipe } from '@angular/core';

@Pipe({
  name: 'customCheckForClosedPipe'
})
export class CustomCheckForClosedPipe {
  transform(deliveryMessage) {
    return deliveryMessage.indexOf('Closed') > -1 ? true:false
  }
}
