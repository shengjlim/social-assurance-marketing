import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-modules';
import { BrandTrustFormComponent } from './components/brand-trust-form/brand-trust-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminFormPageComponent } from './pages/admin-form-page/admin-form-page.component';
import { AssociateFormPageComponent } from './pages/associate-form-page/associate-form-page.component';
import { FirebaseNameOrConfigToken } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PersonalTrustFormComponent } from './components/personal-trust-form/personal-trust-form.component';
import { InnovationTrustFormComponent } from './components/innovation-trust-form/innovation-trust-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyADw9uZw5RSxoULuhRMufGIrXt85VW9SjQ",
  authDomain: "social-assurance.firebaseapp.com",
  databaseURL: "https://social-assurance.firebaseio.com",
  projectId: "social-assurance",
  storageBucket: "social-assurance.appspot.com",
  messagingSenderId: "81976261167",
  appId: "1:81976261167:web:bb00dd27258ec5c6b6e4da"
};

@NgModule({
  declarations: [
    AppComponent,
    BrandTrustFormComponent,
    LoginPageComponent,
    AdminFormPageComponent,
    AssociateFormPageComponent,
    PersonalTrustFormComponent,
    InnovationTrustFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: environment.firebaseConfig.apiKey,
      authDomain: environment.firebaseConfig.authDomain,
      databaseURL: environment.firebaseConfig.databaseURL,
      projectId: environment.firebaseConfig.projectId,
      storageBucket: environment.firebaseConfig.storageBucket,
      messagingSenderId: environment.firebaseConfig.messagingSenderId
    }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
