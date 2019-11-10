import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { MaterialModule } from './material-modules';
import { BrandTrustFormComponent } from './components/brand-trust-form/brand-trust-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminFormPageComponent } from './pages/admin-form-page/admin-form-page.component';
import { AssociateFormPageComponent } from './pages/associate-form-page/associate-form-page.component';
import { FirebaseNameOrConfigToken } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BrandTrustFormComponent,
    LoginPageComponent,
    AdminFormPageComponent,
    AssociateFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: environment.firebaseConfig.apiKey,
      authDomain: environment.firebaseConfig.authDomain,
      databaseURL: environment.firebaseConfig.databaseURL,
      projectId: environment.firebaseConfig.projectId,
      storageBucket: environment.firebaseConfig.storageBucket,
      messagingSenderId: environment.firebaseConfig.messagingSenderId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
