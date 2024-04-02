import { NgModule } from '@angular/core';
import { user } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { NutritionComponent } from './component/nutrition/nutrition.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { RecherchePlatsComponent } from './component/nutrition/recherche-plats/recherche-plats.component';
import { ResultatsPlatsComponent } from './component/nutrition/resultats-plats/resultats-plats.component';
import { GenerationPlanningComponent } from './component/nutrition/generation-planning/generation-planning.component';
import { ResultatPlanningComponent } from './component/nutrition/resultat-planning/resultat-planning.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component : LoginComponent},
  {path: 'dashboard',component : DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'register',component : RegisterComponent},
  {path: 'nutrition',component : NutritionComponent},
  {path: 'rechercheplats',component : RecherchePlatsComponent},
  {path: 'resultatsplats',component : ResultatsPlatsComponent},
  {path: 'generationplanning',component : GenerationPlanningComponent},
  {path: 'resultatplanning',component : ResultatPlanningComponent},
  {path: 'forget-password',component : ForgetPasswordComponent},
  {path: 'verify-email',component : VerifyEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
