import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { NutritionComponent } from './component/nutrition/nutrition.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { RecherchePlatsComponent } from './component/nutrition/recherche-plats/recherche-plats.component';
import { ResultatsPlatsComponent } from './component/nutrition/resultats-plats/resultats-plats.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component : LoginComponent},
  {path: 'dashboard',component : DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'register',component : RegisterComponent},
  {path: 'nutrition',component : NutritionComponent},
  {path: 'rechercheplats',component : RecherchePlatsComponent},
  {path: 'resultatsplats',component : ResultatsPlatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
