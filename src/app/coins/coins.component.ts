import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { ICoin } from '../ICoin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  public coins: ICoin[] = [];
  public coin!: ICoin;
  public search: string = "";

  constructor(private coinsService: CoinsService) {}

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins() {
    this.coinsService.fetchAll().subscribe( data => {
      //console.log(data);
      const dataArray = Object.values(data);
      //console.log(dataArray[0]);
      this.coins = dataArray[0];
    })
  }

  selectCoin(coin: ICoin) {
    this.coin = coin;
  }
}