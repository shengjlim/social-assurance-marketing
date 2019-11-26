import { Component, OnInit } from '@angular/core';
import { BrandTrust } from 'src/app/models/brand-trust';
import { InnovationTrust } from 'src/app/models/innovation-trust';
import { PersonalTrust } from 'src/app/models/personal-trust';

import { TrustService } from 'src/app/services/trust.service';
import { LoginService } from 'src/app/services/login-service.service';
import { CsvDownloaderService } from 'src/app/services/csv-downloader.service';

@Component({
    selector: 'app-view-entries-page',
    templateUrl: './view-entries-page.component.html',
    styleUrls: ['./view-entries-page.component.css']
})
export class ViewEntriesPageComponent implements OnInit {

  personalTrust: Array<PersonalTrust>;
  brandTrust: BrandTrust;
  innovationTrust: InnovationTrust;

  constructor(private ts : TrustService, private auth: LoginService, private csv: CsvDownloaderService) { }

  ngOnInit() {
    let groupId = this.auth.getGroupId();
    groupId = "other";
    this.ts.getPersonalTrust(groupId).get().subscribe(data => {
      let personalAnswersList = [];
      for(let i = 0; i < data.docs.length; i++) {
          let obj = data.docs[i].data();
          let personalAnswers = new PersonalTrust(obj.groupId, obj.email, obj.connection, obj.control, obj.consistency, obj.commitment, obj.coCreation);
          personalAnswersList.push(personalAnswers);
      }
      console.log(personalAnswersList);
      this.personalTrust = personalAnswersList;
    });

    this.ts.getBrandTrust(groupId).get().subscribe(data => {
      let obj = data.docs[0].data();
      let brandAnswers: BrandTrust = new BrandTrust(obj.groupId, obj.associations, obj.incitingIncidents, obj.conflict, obj.callToAction, obj.vision);
      this.brandTrust = brandAnswers;
    });

    this.innovationTrust = this.ts.getInnovationTrust(groupId).get().subscribe(data => {
      let obj = data.docs[0].data();
      let innovationAnswers: InnovationTrust = new InnovationTrust(obj.groupId, obj.relativeTrust, obj.userExperience, obj.promise, obj.socialProof);
      this.innovationTrust = innovationAnswers;
    });
  }

  downloadToCSV() {
      this.csv.exportAsExcelFile(this.brandTrust, this.innovationTrust, this.personalTrust, "Currency of Trust");
  }
}
