import { Component, Input } from '@angular/core';
import { WalletService } from '../../../wallet.service';

@Component({
  selector: 'app-coin-card',
  imports: [],
  templateUrl: './coin-card.component.html',
  styles: ``
})
export class CoinCardComponent {
  @Input() coin:any

  constructor(private wallet:WalletService) {}

  addToWallet(coin:any) {
    this.wallet.addToWallet(coin)
  }

  isAlreadyInWallet(coin:any) {
    return this.wallet.isAlreadyInWallet(coin)
  }
}
