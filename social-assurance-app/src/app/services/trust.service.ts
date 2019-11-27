import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrustService {

  constructor(private db: AngularFirestore) { }

  getPersonalTrust(groupId): any {
    return this.db.collection("personal", ref => ref.where("groupId", "==", groupId));
  }

  getBrandTrust(groupId): any {
    return this.db.collection("brand", ref => ref.where("groupId", "==", groupId));
  }

  getInnovationTrust(groupId): any {
    return this.db.collection("innovation", ref => ref.where("groupId", "==", groupId));
  }

}
