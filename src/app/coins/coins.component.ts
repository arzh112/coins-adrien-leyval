import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { ICoins } from '../ICoins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  
  public coins?: ICoins[];
  constructor(private coinsService: CoinsService) {}


  ngOnInit(): void {
    this.getCoins();
  }

  getCoins() {
    this.coinsService.fetchAll().subscribe( data => {
      console.log(data);
      const dataArray = Object.values(data);
      console.log(dataArray[0]);
      this.coins = dataArray[0];
    })
  }
}