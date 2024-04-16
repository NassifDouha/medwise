import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChatComponent} from '../chat/chat.component';
import { ResultatComponent } from '../resultat/resultat.component';

const routes: Routes = [
  {
    path : "user",
    component : UserComponent
  },
  {
    path:"registration",
    component : RegistrationComponent
  },
  {
    path:"chatbot",
    component:ChatComponent
  },
  {
    path:"resultat",
    component:ResultatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


