import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private urlBase = "https://api.coinlore.net/api/"

  constructor(private http:HttpClient) { }

  getMarketData() {
    return this.http.get(this.urlBase + "tickers/?limit=20")
  }

  getEurDolRate() {
    return this.http.get(this.urlBase + "ticker/?id=111393")
  }
}
