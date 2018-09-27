import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROS } from '../model/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
    return HEROS;
  }

}
