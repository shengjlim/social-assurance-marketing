import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminFormPageComponent } from './pages/admin-form-page/admin-form-page.component';
import { AssociateFormPageComponent } from './pages/associate-form-page/associate-form-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { AssociateLoginPageComponent } from './pages/associate-login-page/associate-login-page.component';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { ViewEntriesPageComponent } from './pages/view-entries-page/view-entries-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'associatelogin', component: AssociateLoginPageComponent },
  { path: 'adminform', component: AdminFormPageComponent, canActivate: [AuthGuard] },
  { path: 'associateform', component: AssociateFormPageComponent, canActivate: [AuthGuard]},
  { path: 'createAccount', component: CreateAccountPageComponent },
  { path: 'landing', component: AdminLandingPageComponent, canActivate: [AuthGuard] },
  { path: 'entries', component: ViewEntriesPageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
