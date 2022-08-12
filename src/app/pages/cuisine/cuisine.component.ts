import { Component, OnInit } from '@angular/core';
import Cuisine from '../../data/cuisine.interface';
import { cuisines } from '../../data/cuisines';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  constructor() { }

  cuisines: Cuisine[] = cuisines;

  ngOnInit(): void {
  }

}
