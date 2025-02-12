import { Pipe, PipeTransform } from '@angular/core';
import { MarketDataService } from './market-data.service';

@Pipe({
  name: 'dollarToEuro'
})
export class DollarToEuroPipe implements PipeTransform {

  constructor(private market:MarketDataService) {}

  transform(value: number): number {
    return value / this.market.getEurDolRate()
  }

}
