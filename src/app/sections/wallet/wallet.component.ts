import { Component } from '@angular/core';
import { WalletService } from '../../wallet.service';
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { AssetActionsComponent } from './asset-actions/asset-actions.component';

@Component({
  selector: 'app-wallet',
  imports: [AssetQuantityComponent, AssetActionsComponent],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  constructor(private wallet:WalletService) {}

  getWalletAssets() {
    return this.wallet.getWalletAssets()
  }
}
