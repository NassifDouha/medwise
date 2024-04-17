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
import { EvaluationPhysiqueComponent } from './component/evaluation-physique/evaluation-physique.component';
import { ExerciceFitnessComponent } from './component/exercice-fitness/exercice-fitness.component';
import { ChatComponent } from './component/evaluation-psychologique/chat/chat.component';
import { ResultatComponent } from './component/evaluation-psychologique/resultat/resultat.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component : LoginComponent},
  {path: 'dashboard',component : DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'register',component : RegisterComponent},
  {path: 'nutrition',component : NutritionComponent, canActivate: [AuthGuardService] },
  {path: 'rechercheplats',component : RecherchePlatsComponent, canActivate: [AuthGuardService] },
  {path: 'resultatsplats',component : ResultatsPlatsComponent, canActivate: [AuthGuardService] },
  {path: 'generationplanning',component : GenerationPlanningComponent, canActivate: [AuthGuardService] },
  {path: 'resultatplanning',component : ResultatPlanningComponent, canActivate: [AuthGuardService] },
  {path: 'forget-password',component : ForgetPasswordComponent},
  {path: 'verify-email',component : VerifyEmailComponent},
  {path: 'evaluationphysique', component: EvaluationPhysiqueComponent, canActivate: [AuthGuardService] },
  {path: 'exercice', component : ExerciceFitnessComponent, canActivate: [AuthGuardService] },
  {path: 'chatbot',component : ChatComponent, canActivate: [AuthGuardService]},
  {path: 'resultat-psychologique',component : ResultatComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
