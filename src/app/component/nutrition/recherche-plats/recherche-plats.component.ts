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
  sortDirection: string = 'asc';
  diet: string = '';
  intolerances: string = '';
  type: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  searchRecipes() {
    
    console.log('Paramètres envoyés :', this.sort, this.sortDirection, this.diet, this.intolerances, this.type);
  this.apiService.searchSimpleRecipe(this.sort, this.sortDirection, this.diet, this.intolerances, this.type)
    .subscribe((data) => {
      console.log('Réponse de l\'API :', data);
      this.router.navigate(['/resultatsplats'], { state: { recipes: data } });
    }, (error) => {
      console.error('Erreur de l\'API :', error);
    });
}
}
