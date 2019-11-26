import { Component, OnInit } from '@angular/core';
import { PersonalTrust } from '../../models/personal-trust';

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

}
