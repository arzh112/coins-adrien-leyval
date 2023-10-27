import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoins } from './ICoins';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  private url: string = "https://api.coincap.io/v2/assets";

  constructor(private httpClient: HttpClient) { }

  fetchAll() {
    return this.httpClient.get<any[]>(this.url);
  }
}
