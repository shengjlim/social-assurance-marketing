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
    this.db.collection("personal", ref => ref.where("email", "==", personalTrust.email)).get().subscribe(data => {
      if(data.docs[0].data() != undefined) {
        this.db.collection('personal').doc(data.docs[0].id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
      this.db.collection('personal').add(personalTrust);
    });
  }

  putBrandTrustObject(brandTrust){
    this.db.collection("brand", ref => ref.where("groupId", "==", brandTrust.groupId)).get().subscribe(data => {
      if(data.docs[0].data() != undefined) {
        this.db.collection('brand').doc(data.docs[0].id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
      this.db.collection('brand').add(brandTrust);
    });
  }

  putInnovationTrustObject(innovationTrust){
    this.db.collection("innovation", ref => ref.where("groupId", "==", innovationTrust.groupId)).get().subscribe(data => {
      if(data.docs[0].data() != undefined) {
        this.db.collection('innovation').doc(data.docs[0].id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
      this.db.collection('innovation').add(innovationTrust);
    });
  }
}
