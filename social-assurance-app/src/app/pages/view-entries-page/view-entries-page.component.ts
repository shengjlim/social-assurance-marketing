import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrandTrust } from 'src/app/models/brand-trust';
import { InnovationTrust } from 'src/app/models/innovation-trust';
import { PersonalTrust } from 'src/app/models/personal-trust';

@Component({
    selector: 'app-view-entries-page',
    templateUrl: './view-entries-page.component.html',
    styleUrls: ['./view-entries-page.component.css']
})
export class ViewEntriesPageComponent implements OnInit {

  entries: Array<PersonalTrust>;

  constructor() { }

  ngOnInit() {
    this.entries = [new PersonalTrust("Connection", "Control", "consistency", "commitmetn", "cocreation","email@email.email",""),
    new PersonalTrust("Connection", "Control", "consistency", "commitmetn", "cocreation","person@email.email","")];
  }
/*
    constructor(private db: AngularFirestore) { }

    ngOnInit() {
        let groupId = "other";
        let brandCollection = this.db.collection("brand", ref => ref.where("groupId", "==", groupId));
        let innovationCollection = this.db.collection("innovation", ref => ref.where("groupId", "==", groupId));
        let personalCollection = this.db.collection("personal", ref => ref.where("groupId", "==", groupId));


      brandCollection.get().subscribe(data => {
          let obj = data.docs[0].data();
          let brandAnswers: BrandTrust = new BrandTrust(obj.associations, obj.incitingIncidents, obj.conflict, obj.callToAction, obj.vision, obj.groupId);
          console.log(brandAnswers);
          // TODO: Set HTML field of brandAnswers here, as it loses scope
      });

      innovationCollection.get().subscribe(data => {
          let obj = data.docs[0].data();
          let innovationAnswers: InnovationTrust = new InnovationTrust(obj.relativeTrust, obj.userExperience, obj.promises, obj.socialProof, obj.groupId);
          console.log(innovationAnswers);
          // TODO: Set HTML field of innovationAnswers here, as it loses scope
      });

      personalCollection.get().subscribe(data => {
          let personalAnswersList = []
          for(let i = 0; i < data.docs.length; i++) {
              let obj = data.docs[i].data();
              let personalAnswers = new PersonalTrust(obj.connection, obj.control, obj.consistency, obj.commitment, obj.coCreation, obj.email, obj.groupId);
              personalAnswersList.push(personalAnswers);
          }
          console.log(personalAnswersList);
          // TODO: Set HTML field as personalAnswersList here, as it loses scope
      });
    }
    */
}
