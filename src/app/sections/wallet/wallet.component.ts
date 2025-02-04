import { Component } from '@angular/core';
import { WalletService } from '../../wallet.service';

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  constructor(private wallet:WalletService) {}

  getWalletAssets() {
    return this.wallet.getWalletAssets()
  }
}
