import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test recipe", "this is a test", "https://www.publicdomainpictures.net/pictures/320000/velka/plate-with-food-1581345871vMM.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
