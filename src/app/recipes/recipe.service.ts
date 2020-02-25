import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [];


  constructor(private slService: ShoppingService) {
    this.recipes = [
      { name: 'Homemade ribs', 
      description: 'The best meal ever' , 
      imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
      ingredients: [
          new Ingredient('Meat',1),
          new Ingredient('Mustard',1),
          new Ingredient('Peppers', 3)
      ]},
      { name: 'Big Fat Burger', 
      description: 'Tastiest of them all!', 
      imagePath: 'https://bigseventravel.com/wp-content/uploads/2019/06/by.jpg', 
      ingredients: [
          new Ingredient('Buns',2),
          new Ingredient('Meat',2),
          new Ingredient('Cheese',1),
          new Ingredient('Bacon',1)
      ]}
    ]
   }

   getRecipes() {
       return this.recipes.slice();
   }

   getRecipe(index: number) {
       return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
       this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe)
   {
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index:number, newRecipe: Recipe){
       this.recipes[index] = newRecipe;
       this.recipesChanged.next(this.recipes.slice());

   }
}