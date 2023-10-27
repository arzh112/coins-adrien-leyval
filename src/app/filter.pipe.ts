import { Pipe, PipeTransform } from '@angular/core';
import { ICoin } from './ICoin';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoin[], search: string): ICoin[] {
    let result: ICoin[] = []; // tableau permettant de récupérer les objet filtrés
    for(let coin of value) {
      // condtion pour vérifier si le nom contient la recherche
      if(coin.name.toLowerCase().includes(search.toLowerCase())) { 
        result.push(coin);
      }
    }
    return result;
  }

}
