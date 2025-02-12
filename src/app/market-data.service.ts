import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private urlBase = "https://api.coinlore.net/api/"

  private dolEurRate

  constructor(private http:HttpClient) {
    this.dolEurRate = JSON.parse(localStorage.getItem("dolEurRate") || "1")
    this.http.get(this.urlBase + "ticker/?id=111393").subscribe(
      json => {
        let coin:any = json
        this.dolEurRate = coin[0].price_usd
        localStorage.setItem("dolEurRate", this.dolEurRate)
      }
    )
  }

  getMarketData() {
    return this.http.get(this.urlBase + "tickers/?limit=20")
  }

  getCoinData(id:number) {
    return this.http.get(this.urlBase + "ticker/?id=" + id)
  }

  getEurDolRate() {
    return this.dolEurRate
  }
}


