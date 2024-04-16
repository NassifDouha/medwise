import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://fitness-calculator.p.rapidapi.com';
  private apiKey = 'acdf3a045dmsh0c3512dfdd09426p17da70jsn70ffc2b8b04b';
  constructor(private http:HttpClient) { }

  getFitnessData(payload:any){
    return this.http.get('https://fitness-calculator.p.rapidapi.com/macrocalculator',payload)
  }
  calculateMacro(payload: any): Observable<any> {
    const url = `${this.baseUrl}/macrocalculator`;

    // Construct headers
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'Content-Type': 'application/json'
    });

    return this.http.get(url, { headers, params: payload });
  }
}
