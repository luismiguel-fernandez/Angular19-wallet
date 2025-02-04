import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-card',
  imports: [],
  templateUrl: './coin-card.component.html',
  styles: ``
})
export class CoinCardComponent {
  @Input() coin:any
}
