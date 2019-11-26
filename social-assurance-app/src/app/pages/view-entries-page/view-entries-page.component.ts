import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-view-entries-page',
    templateUrl: './view-entries-page.component.html',
    styleUrls: ['./view-entries-page.component.css']
})
export class ViewEntriesPageComponent implements OnInit {

    constructor(private fireauth: AngularFireAuth, private db: AngularFirestore, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        let groupId = "other";
        let brandCollection = this.db.collection("brand", ref => ref.where("groupId", "==", groupId));
        let innovationCollection = this.db.collection("innovation", ref => ref.where("groupId", "==", groupId));
        let personalCollection = this.db.collection("personal", ref => ref.where("groupId", "==", groupId));

        brandCollection.get().subscribe(data => {
            let brandAnswers = data.docs[0].data();
            console.log(brandAnswers);
            // TODO: Set HTML field of brandAnswers here, as it loses scope
        });

        innovationCollection.get().subscribe(data => {
            let innovationAnswers = data.docs[0].data();
            console.log(innovationAnswers);
            // TODO: Set HTML field of innovationAnswers here, as it loses scope
        });

        personalCollection.get().subscribe(data => {
            let personalAnswersList = []
            data.docs.forEach(element => {
                personalAnswersList.push(element.data());
            });
            console.log(personalAnswersList);
            // TODO: Set HTML field as personalAnswersList here, as it loses scope
        });
    }
}
