import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public credentialForm: FormGroup;

  constructor(public auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.credentialForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(credentialFormValue): void {
    this.auth.emailLogin(credentialFormValue.email, credentialFormValue.password);

    if(this.auth.authenticated){
      this.router.navigate(['/adminform']);
    }
  }

  // login() {
  //   console.log(this.email);
  //   console.log(this.password);
  //   if (this.email != undefined && this.password != undefined) {
  //     this.auth.auth.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorMessage);
  //       // ...
  //     });


  //     this.auth.auth.onAuthStateChanged(function(user) {
  //       if (user) {
  //         // User is signed in.
  //         //this.router.navigate(['/adminform']);
  //         console.log("Logged in");
  //         // ...
  //       } else {
  //         // User is signed out.
  //         //this.router.navigate(['/']);
  //         console.log("Logged out");
  //         // ...
  //       }
  //     });
  //   }
  // }
}
