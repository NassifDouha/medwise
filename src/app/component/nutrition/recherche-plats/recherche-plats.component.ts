import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-plats',
  templateUrl: './recherche-plats.component.html',
  styleUrl: './recherche-plats.component.css'
})

export class RecherchePlatsComponent {
  // Définissez les propriétés pour stocker les valeurs sélectionnées par l'utilisateur
  sort: string = 'healthiness';
  sortDirection: string = 'desc';
  diet: string = '';
  intolerances: string = '';
  type: string = '';
  query: string = '';
  includeIngredients: string = '';
  excludeIngredients: string = '';
  minCalories: number = 0;
  maxCalories: number = 9999;
  minProtein: number = 0;
  maxProtein: number = 9999;
  minFat: number = 0;
  maxFat: number = 9999;
  minCarbs: number = 0;
  maxCarbs: number = 9999;
  minSugar: number = 0;
  maxSugar: number = 9999;
  number: number = 5;

  constructor(private apiService: ApiService, private router: Router) {}

  searchRecipes() {
    console.log('Paramètres envoyés :', this.sort, this.sortDirection, this.diet, this.intolerances, this.type, this.query, this.includeIngredients, this.excludeIngredients, this.minCalories, this.maxCalories, this.minProtein, this.maxProtein, this.minFat, this.maxFat, this.minCarbs, this.maxCarbs, this.minSugar, this.maxSugar, this.number);
    this.apiService.searchSimpleRecipe(this.sort, this.sortDirection, this.diet, this.intolerances, this.type, this.query, this.includeIngredients, this.excludeIngredients, this.minCalories, this.maxCalories, this.minProtein, this.maxProtein, this.minFat, this.maxFat, this.minCarbs, this.maxCarbs, this.minSugar, this.maxSugar, this.number)
      .subscribe((data) => {
        console.log('Réponse de l\'API :', data);
        this.router.navigate(['/resultatsplats'], { state: { recipes: data } });
      }, (error) => {
        console.error('Erreur de l\'API :', error);
      });
  }
}
