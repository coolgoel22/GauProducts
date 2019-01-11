import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router
  ) {
    this.user = afAuth.authState;
   }


   login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // this.afAuth.auth.signInAnonymously().then(
      //   userData => resolve(userData),
      //   err => reject(err))
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          this.afAuth.auth.currentUser.updateProfile({
            displayName: "Hello",
            photoURL: ''
          });
          debugger;
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
  } 
}
