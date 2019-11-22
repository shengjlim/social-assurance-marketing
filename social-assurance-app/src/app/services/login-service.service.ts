import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

// from angularfirebase.com tutorial
@Injectable()
export class LoginService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private router:Router) {

            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  emailLogin(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log("success");
      })
      .catch(error => console.log(error));
 }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login'])
  }
}