import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: "Windstorm"
  }
  
  

  constructor() { }

  ngOnInit() {
  }

}
