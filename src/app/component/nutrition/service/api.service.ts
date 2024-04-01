import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = 'https://api.spoonacular.com';
  constructor(private http: HttpClient) { }
  generateMealPlan(timeFrame:string, targetCalories:number, diet:string, exclude:string) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mealplanner/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}&apiKey=1e1b792700e846eca00f1ce29db5449d`);
  }
  searchRecipe(query: string, diet: string, intolerances: string, includeIngredients: string, excludeIngredients: string, type: string, maxReadyTime: number,sort:string, sortDirection: string, minCarbs: number, maxCarbs: number, minProtein: number, maxProtein: number, minCalories: number, maxCalories: number, minFat: number, maxFat: number, minCalcium: number, maxCalcium: number, minVitaminC: number, maxVitaminC: number, minVitaminD: number, maxVitaminD: number, minVitaminB12: number, maxVitaminB12: number, minIron: number, maxIron: number, minMagnesium: number, maxMagnesium: number, minPotassium: number, maxPotassium: number, minSugar: number, maxSugar: number, minZinc: number, maxZinc: number, number: number): Observable<any> {
    const params = new HttpParams()
      .set('query', query)
      .set('diet', diet)
      .set('intolerances', intolerances)
      .set('includeIngredients', includeIngredients)
      .set('excludeIngredients', excludeIngredients)
      .set('type', type)
      .set('instructionsRequired', `true`)
      .set('maxReadyTime', maxReadyTime.toString())
      .set('sort', sort)
      .set('sortDirection', sortDirection)
      .set('minCarbs', minCarbs.toString())
      .set('maxCarbs', maxCarbs.toString())
      .set('minProtein', minProtein.toString())
      .set('maxProtein', maxProtein.toString())
      .set('minCalories', minCalories.toString())
      .set('maxCalories', maxCalories.toString())
      .set('minFat', minFat.toString())
      .set('maxFat', maxFat.toString())
      .set('minCalcium', minCalcium.toString())
      .set('maxCalcium', maxCalcium.toString())
      .set('minVitaminC', minVitaminC.toString())
      .set('maxVitaminC', maxVitaminC.toString())
      .set('minVitaminD', minVitaminD.toString())
      .set('maxVitaminD', maxVitaminD.toString())
      .set('minVitaminB12', minVitaminB12.toString())
      .set('maxVitaminB12', maxVitaminB12.toString())
      .set('minIron', minIron.toString())
      .set('maxIron', maxIron.toString())
      .set('minMagnesium', minMagnesium.toString())
      .set('maxMagnesium', maxMagnesium.toString())
      .set('minPotassium', minPotassium.toString())
      .set('maxPotassium', maxPotassium.toString())
      .set('minSugar', minSugar.toString())
      .set('maxSugar', maxSugar.toString())
      .set('minZinc', minZinc.toString())
      .set('maxZinc', maxZinc.toString())
      .set('number', number.toString())
      .set('apiKey', `1e1b792700e846eca00f1ce29db5449d`);

    return this.http.get<any>(`${this.baseUrl}/recipes/complexSearch`, { params });
  }
  searchSimpleRecipe(sort:string, sortDirection: string, diet: string, intolerances: string, type: string): Observable<any> {
    const params = new HttpParams()
      .set('sort', sort)
      .set('sortDirection', sortDirection)
      .set('diet', diet)
      .set('intolerances', intolerances)
      .set('type', type)
      .set('apiKey', `1e1b792700e846eca00f1ce29db5449d`);
    return this.http.get<any>(`${this.baseUrl}/recipes/complexSearch`, { params });
  }
  
}
