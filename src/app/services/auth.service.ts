import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

    this.afAuth.authState.subscribe((user)=>{
      if(!user){
        this.logout();
      }
    });
  }

   getUser(){
     if(this.afAuth.auth.currentUser){
       return this.afAuth.auth.currentUser;
     }else{

     }
   }

   
   login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // this.afAuth.auth.signInAnonymously().then(
      //   userData => resolve(userData),
      //   err => reject(err))
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          resolve(userData);
        },
      err => reject(err))
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err))
    });
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  } 
}
