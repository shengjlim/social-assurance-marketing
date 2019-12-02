import { Injectable } from '@angular/core';
import { BrandTrust } from '../models/brand-trust';
import { InnovationTrust } from '../models/innovation-trust';
import { PersonalTrust } from '../models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  constructor(private db: AngularFirestore, public http: Http) { }

  putPersonalTrustObject(personalTrust){
    this.db.collection('personal').add(personalTrust);
    this.sendPersonalTrustEmail(personalTrust);
  }

  putBrandTrustObject(brandTrust){
    this.db.collection('brand').add(brandTrust);
  }

  putInnovationTrustObject(innovationTrust){
    this.db.collection('innovation').add(innovationTrust);
  }

  sendPersonalTrustEmail(personalTrust){
    this.http.post('https://us-central1-social-assurance.cloudfunctions.net/sendMail', personalTrust).subscribe();
  }
}
