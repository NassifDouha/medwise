import { Component, Input, input } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  @Input() showButtons: boolean = false;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout(); // Appelez la méthode logout() du service d'authentification
  }
}