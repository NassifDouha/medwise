import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {
  sentiment: string | undefined;
  motivationMessage: string | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.sentiment = navigation.extras.state['sentiment'];
      this.setMotivationMessage();
    }
  }

  private setMotivationMessage() {
    switch (this.sentiment) {
      case 'P+':
        this.motivationMessage = "Tu es une source de lumière et de positivité. Continue à rayonner!";
        break;
      case 'P':
        this.motivationMessage = "Chaque jour est une nouvelle opportunité de faire briller ta lumière intérieure.";
        break;
      case 'NEU':
        this.motivationMessage = "Reste calme et stable comme l'eau d'un lac tranquille.";
        break;
      case 'N':
        this.motivationMessage = "Les épreuves d'aujourd'hui sont les forces de demain. Reste fort!";
        break;
      case 'N+':
        this.motivationMessage = "Les tempêtes ne durent pas éternellement. Garde espoir!";
        break;
      case 'NONE':
        this.motivationMessage = "Parfois, même lorsque nous ne pouvons pas voir le soleil, il brille toujours derrière les nuages.";
        break;
      default:
        this.motivationMessage = "Peu importe ce que tu ressens, rappelle-toi que tu es assez fort pour surmonter les défis.";
        break;
    }
  }
}
