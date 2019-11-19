import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AdminFormPageComponent } from '../admin-form-page/admin-form-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  auth: AngularFireAuth;
  router: Router;

  email;
  password;

  constructor(auth: AngularFireAuth, router: Router) {
    this.auth = auth;
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    if (this.email != undefined && this.password != undefined) {
      this.auth.auth.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });

      this.auth.auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          //this.router.navigate(['/adminform']);
          console.log("Logged in");
          // ...
        } else {
          // User is signed out.
          //this.router.navigate(['/']);
          console.log("Logged out");
          // ...
        }
      });
    }
  }
}
