import { NgModule } from '@angular/core';
import { user } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "user",
    component : UserComponent
  },
  {
    path: "registration",
    component : RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
