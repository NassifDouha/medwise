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
        this.router.navigate(['/resultatplanning'], { state: { planning: data } });
      }, (error) => {
        console.error('Erreur de l\'API :', error);
      });
  }
}
