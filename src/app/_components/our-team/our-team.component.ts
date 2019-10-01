import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/_services/sumary.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  ourTeams: any;
  constructor(
    private summaryS: SummaryService
  ) {  }

  ngOnInit() {
    this.loadTeamData();
  }

  private loadTeamData() {
    this.summaryS.getTeams().pipe(first()).subscribe(data => {
      this.ourTeams = data;
    });
  }

}
