import { Pipe, PipeTransform } from '@angular/core';
import { ICoins } from './ICoins';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoins[], search: string): ICoins[] {
    
    let result: ICoins[] = []; // tableau permettant de récupérer les objet filtrés
    for(let coin of value) {
      // condtion pour vérifier si le nom contient la recherche
      if(coin.name.toLowerCase().includes(search.toLowerCase())) { 
        result.push(coin);
      }
    }
    return result;
  }

}
