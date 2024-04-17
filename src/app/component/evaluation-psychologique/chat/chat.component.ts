import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  textToAnalyze: string = ''; 

  constructor(private http: HttpClient, private router: Router) {}

  analyze() {
    const apiKey = '11f042b9658472f474748d189621461d';
    const url = 'https://api.meaningcloud.com/sentiment-2.1';

    const body = new URLSearchParams();
    body.set('key', apiKey);
    body.set('txt', this.textToAnalyze);
    body.set('lang', 'auto');

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post<any>(url, body.toString(), { headers }).subscribe(
      (response) => {
        const sentiment = response.score_tag;
        this.router.navigate(['/resultat-psychologique'], { state: { sentiment } }); // Passage des données à la nouvelle page
      },
      (error) => {
        console.error('Erreur lors de l\'analyse du sentiment :', error);
      }
    );
  }
}
