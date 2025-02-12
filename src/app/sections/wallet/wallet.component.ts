import { Component } from '@angular/core';
import { WalletService } from '../../wallet.service';
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { AssetActionsComponent } from './asset-actions/asset-actions.component';
import { MarketDataService } from '../../market-data.service';
import { CurrencyPipe } from '@angular/common';
import { DollarToEuroPipe } from '../../dollar-to-euro.pipe';

@Component({
  selector: 'app-wallet',
  imports: [AssetQuantityComponent, AssetActionsComponent, CurrencyPipe, DollarToEuroPipe],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  constructor(private wallet:WalletService, private market:MarketDataService) {}

  getTotalBalance() {
    let total = 0
    this.getWalletAssets().forEach( c => {
      total += c.quantity * c.price_usd
    })
    return total
  }

  getWalletAssets() {
    return this.wallet.getWalletAssets()
  }

  updateWallet() {
    let wallet = this.getWalletAssets()
    wallet.forEach( c => {
      this.market.getCoinData(c.id).subscribe(
        json => {
          let updatedCoin:any = json
          c.price_usd = updatedCoin[0].price_usd
        }
      )
    })
  }
}
