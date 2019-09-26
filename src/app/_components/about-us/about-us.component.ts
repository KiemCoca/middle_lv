import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { SummaryService } from 'src/app/_services/sumary.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any;
  constructor(
    private authenticationService: AuthenticationService,
    private summaryS: SummaryService
  ) {  }

  ngOnInit() {
    this.loadAboutUs();
  }

  private loadAboutUs() {
    this.summaryS.getAboutUs().pipe(first()).subscribe(data => {
      this.aboutUsData = data;
    });
  }
}
