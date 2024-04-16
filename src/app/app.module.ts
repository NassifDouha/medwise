import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from '../chat/chat.component';
import { SentimentAnalysisService } from '../sentiment-analysis.service';
import { ResultatComponent } from '../resultat/resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    RegistrationComponent,
    ResultatComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projet-medwise","appId":"1:336115863686:web:595fdcd9a01759825f8107","storageBucket":"projet-medwise.appspot.com","apiKey":"AIzaSyAUHQ0ekXMwjln-o37LQL8Vl7oxM5VLL5I","authDomain":"projet-medwise.firebaseapp.com","messagingSenderId":"336115863686"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync(),
    SentimentAnalysisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
