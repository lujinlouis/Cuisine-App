import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Cuisine from '../../data/cuisine.interface';
import { cuisines } from '../../data/cuisines';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  id: string;
  cuisine: Cuisine;

  likeRecipe = (recipeName) => {
    alert('You have liked the ' + recipeName + ' recipe!');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.cuisine = cuisines.find((cuisine)=>{
        return cuisine.id.toString() === params.id
      })
    })
  }

}
