import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Exercice, Muscle, MuscleResponse} from './exercice_fitness_interfaces';

@Injectable({
  providedIn: 'root'
})



export class ApiService {
  public baseUrl = 'https://wger.de/api/v2/';
  constructor(private http: HttpClient) { }

  getMuscles(name_en:string): Observable<MuscleResponse> {
    const params = new HttpParams().append('name_en', name_en)
    return this.http.get<MuscleResponse>(this.baseUrl + 'muscle/', {params});
  }

  getMuscleListe(): Observable<MuscleResponse> {
    return this.http.get<MuscleResponse>(this.baseUrl + 'muscle/')};


  getMuscleExercice(id:number): Observable<MuscleResponse> {
    const params = new HttpParams().append('muscles', id)
      
    return this.http.get<MuscleResponse>(this.baseUrl + 'exercise/'+'?language=2&', {params})
  }

}


