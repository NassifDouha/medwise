import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat-planning',
  templateUrl: './resultat-planning.component.html',
  styleUrl: './resultat-planning.component.css'
})
export class ResultatPlanningComponent implements OnInit {
  planning: any; // Cette propriété va contenir les données des recettes
  recipeDetails: any[] | undefined; // Cette propriété va contenir les détails des recettes

  constructor(private router: Router) {}

  ngOnInit() {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
      this.planning = currentNavigation.extras.state['planning'];
      this.recipeDetails = currentNavigation.extras.state['recipeDetails'] || [];
    } else {
      this.planning = history.state['planning'];
      this.recipeDetails = history.state['recipeDetails'] || [];
    }
  }
  capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}