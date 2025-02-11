import { Component } from '@angular/core';
import { MarketDataService } from '../../market-data.service';
import { CoinCardComponent } from './coin-card/coin-card.component';
import { FilterByStringPipe } from '../../filter-by-string.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  imports: [CoinCardComponent, FilterByStringPipe, FormsModule],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {

  private coins:any[] = []
  protected pattern:string = ""

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

  getPattern() {
    return this.pattern
  }

}
