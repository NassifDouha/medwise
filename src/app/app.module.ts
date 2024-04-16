import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { HttpClientModule } from '@angular/common/http';
import { NutritionComponent } from './component/nutrition/nutrition.component';
import { MatRadioModule } from '@angular/material/radio';
import { RecherchePlatsComponent } from './component/nutrition/recherche-plats/recherche-plats.component';
import { ResultatsPlatsComponent } from './component/nutrition/resultats-plats/resultats-plats.component';
import { GenerationPlanningComponent } from './component/nutrition/generation-planning/generation-planning.component';
import { ResultatPlanningComponent } from './component/nutrition/resultat-planning/resultat-planning.component';
import { EvaluationPhysiqueComponent } from './component/evaluation-physique/evaluation-physique.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { ExerciceFitnessComponent } from './component/exercice-fitness/exercice-fitness.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    NutritionComponent,
    RecherchePlatsComponent,
    ResultatsPlatsComponent,
    GenerationPlanningComponent,
    ResultatPlanningComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    EvaluationPhysiqueComponent,
    NavbarComponent,
    Navbar2Component,
    ExerciceFitnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projet-medwise","appId":"1:336115863686:web:595fdcd9a01759825f8107","storageBucket":"projet-medwise.appspot.com","apiKey":"AIzaSyAUHQ0ekXMwjln-o37LQL8Vl7oxM5VLL5I","authDomain":"projet-medwise.firebaseapp.com","messagingSenderId":"336115863686"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatRadioModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


