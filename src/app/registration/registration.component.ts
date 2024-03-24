import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private authService: RegistrationService) { }

  register(email: string, password: string): void {
    this.authService.registerWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utilisateur inscrit
        const user = userCredential.user;
        // Faites quelque chose ici, par exemple redirigez l'utilisateur vers une page de bienvenue
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Gérez l'erreur ici, par exemple affichez un message d'erreur à l'utilisateur
      });
  }
}
