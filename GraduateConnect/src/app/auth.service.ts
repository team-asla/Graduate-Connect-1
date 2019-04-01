import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error:any;
  constructor(public af: AngularFireAuth) {
    // this.af.auth.onAuthStateChanged((auth) => {
    //         if (auth) {
    //           this.router.navigateByUrl('/members');
    //         }
    //       });
         }
        loginWithGoogle() {
          this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }
        loginFb() {
          this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        }
   }

