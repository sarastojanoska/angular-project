import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
