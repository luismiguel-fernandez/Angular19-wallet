import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private wallet:any[] = []

  constructor() {
    this.wallet = JSON.parse( localStorage.getItem("wallet") || "[]" )
  }

  addToWallet(coin:any){
    if (!this.isAlreadyInWallet(coin)) {
      this.wallet.push( {
        ...coin,
        quantity: 0
      })
      this.saveWallet()
    }
  }
  getWalletAssets() {
    return this.wallet
  }
  isAlreadyInWallet(coin:any) {
    return this.wallet.find( c => c.id == coin.id )
  }
  moveAssetUp(coin:any) {
    let position = this.wallet.findIndex( c => c.id == coin.id )
    if (position > 0) {
      this.wallet.splice(position,1)
      this.wallet.splice(position-1,0,coin)
      this.saveWallet()
    }
  }
  moveAssetDown(coin:any) {
    let position = this.wallet.findIndex( c => c.id == coin.id )
    if (position < this.wallet.length-1) {
      this.wallet.splice(position,1)
      this.wallet.splice(position+1,0,coin)
      this.saveWallet()
    }
  }
  removeFromWallet(coin:any){
    let position = this.wallet.findIndex( c => c.id == coin.id )
    this.wallet.splice(position,1)
    this.saveWallet()
  }
  saveWallet() {
    localStorage.setItem("wallet", JSON.stringify(this.wallet) )
  }
}
