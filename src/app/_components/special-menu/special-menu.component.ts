import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { SummaryService } from 'src/app/_services/sumary.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-special-menu',
  templateUrl: './special-menu.component.html',
  styleUrls: ['./special-menu.component.css']
})
export class SpecialMenuComponent implements OnInit {
  specialMenu: any;
  constructor(
    private authenticationService: AuthenticationService,
    private summaryS: SummaryService
  ) {  }

  ngOnInit() {
    this.loadSpecialMenu();
  }

  private loadSpecialMenu() {
    this.summaryS.getSpecialMenu().pipe(first()).subscribe(data => {
      this.specialMenu = data;
    });
  }
}
