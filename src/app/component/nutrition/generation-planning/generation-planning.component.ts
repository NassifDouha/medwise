import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generation-planning',
  templateUrl: './generation-planning.component.html',
  styleUrl: './generation-planning.component.css'
})
export class GenerationPlanningComponent {
  // Définissez les propriétés pour stocker les valeurs sélectionnées par l'utilisateur
  timeFrame: string = 'day';
  targetCalories: number = 2000;
  diet: string = '';
  exclude: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  generateMealPlan() {
    console.log('Paramètres envoyés :', this.timeFrame, this.targetCalories, this.diet, this.exclude);
    this.apiService.generateMealPlan(this.timeFrame, this.targetCalories, this.diet, this.exclude)
      .subscribe((data) => {
        console.log('Réponse de l\'API :', data);
        if (this.timeFrame === 'day') {
        // Stockage des détails des recettes
        const recipeDetails: any[] = [];
        // Parcours des repas
        data.meals.forEach((meal: any) => {
          // Faire une requête pour chaque ID de repas
          this.apiService.getRecipeById(meal.id)
            .subscribe((recipeData) => {
              console.log('Détails du repas :', recipeData);
              // Ajouter les détails de la recette au tableau
              recipeDetails.push(recipeData);
              // Vérifier si toutes les requêtes ont été terminées
              if (recipeDetails.length === data.meals.length) {
                // Rediriger vers la page de résultat de planification une fois que toutes les requêtes sont terminées
                this.router.navigate(['/resultatplanning'], { state: { planning: data, recipeDetails: recipeDetails } });
              }
            }, (error) => {
              console.error('Erreur lors de la récupération des détails du repas :', error);
            });
        });
      }
      else{
        this.router.navigate(['/resultatplanning'], { state: { planning: data } });
      } 
      });
  }
}
