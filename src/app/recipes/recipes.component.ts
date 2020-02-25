import { Component, OnInit } from '@angular/core'
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
