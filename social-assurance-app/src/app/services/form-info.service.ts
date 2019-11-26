import { Injectable } from '@angular/core';
import { BrandTrust } from '../models/brand-trust';
import { InnovationTrust } from '../models/innovation-trust';
import { PersonalTrust } from '../models/personal-trust';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  constructor(private db: AngularFirestore) { }

  putPersonalTrustObject(personalTrust){
    this.db.collection('personal').add(personalTrust);
  }

  putBrandTrustObject(brandTrust){
    this.db.collection('brand').add(brandTrust);
  }

  putInnovationTrustObject(innovationTrust){
    this.db.collection('innovation').add(innovationTrust);
  }
}
