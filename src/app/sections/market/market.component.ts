import { Component } from '@angular/core';
import { MarketDataService } from '../../market-data.service';
import { CoinCardComponent } from './coin-card/coin-card.component';

@Component({
  selector: 'app-market',
  imports: [CoinCardComponent],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {

  private coins:any[] = []

  constructor(private market:MarketDataService) {
    this.getMarketData()
  }

  getMarketData() {
    this.market.getMarketData().subscribe(
      json => {
        let objeto:any = json
        this.coins = objeto.data
      }
    )
  }

  getCoins() {
    return this.coins
  }

}
