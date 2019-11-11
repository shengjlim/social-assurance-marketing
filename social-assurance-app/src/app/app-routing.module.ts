import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminFormPageComponent } from './pages/admin-form-page/admin-form-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'adminform', component: AdminFormPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
