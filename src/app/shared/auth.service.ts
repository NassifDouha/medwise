import { Router} from '@angular/router';
import { Inject, Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private auth : Auth = inject(Auth);
  constructor( @Inject(Router) private router : Router) { }

  //login method
   login(email : string, password : string){
    signInWithEmailAndPassword(this.auth,email,password).then( () => {
        localStorage.setItem('token','true');
        this.router.navigate(['dashboard'])
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);

    }) 
    }


    // register method

    register(email : string,password : string) {
      createUserWithEmailAndPassword(this.auth,email,password).then( () => {
        alert('Registration Successful')
        this.router.navigate(['/login']);
      },err => {
        alert(err.message);
        this.router.navigate(['/register']);
      })
    }

   // sign out 

    logout()
    {
     signOut(this.auth).then( () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);

      })
    }

    // forgot password
    forgotPassword(email: string) {
      sendPasswordResetEmail(this.auth, email).then(() => {
        this.router.navigate(['verify-email']);
      }, err => {
        alert(err.message);
      })
    }
}
