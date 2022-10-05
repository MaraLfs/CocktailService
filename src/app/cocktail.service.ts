import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktail[] = [
    {
      name: 'Spritz',
      price: 8,
      picture: 'https://drinkch.rokka.io/new-composition-600/52daa4.jpg'
    },
    {
      name: 'Sex on the beach',
      price: 12,
      picture: 'https://drinkch.rokka.io/new-composition-1200/o-dpr-2/69bc75.jpg'
    },
    {
      name: 'Mojito',
      price: 10,
      picture: 'https://assets.afcdn.com/recipe/20180705/80345_w1024h1024c1cx4150cy1741.webp'
    }
  ]

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
