import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultats-plats',
  templateUrl: './resultats-plats.component.html',
  styleUrl: './resultats-plats.component.css'
})
export class ResultatsPlatsComponent implements OnInit {
  recipes: any  // Cette propriété va contenir les données des recettes

  constructor(private router: Router) {}

  ngOnInit() {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
      this.recipes = currentNavigation.extras.state['recipes'];
    } else {
      this.recipes = history.state['recipes'];
    }
  }
}