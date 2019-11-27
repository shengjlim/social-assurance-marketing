import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login-service.service';

@Injectable()
export class AuthGuardService {

  constructor(public auth: LoginService, public router: Router) { }

  canActivate(): boolean {
    if(!this.auth.groupId) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
