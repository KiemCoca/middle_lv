import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { SummaryService } from 'src/app/_services/sumary.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ourmenu',
  templateUrl: './ourmenu.component.html',
  styleUrls: ['./ourmenu.component.css']
})
export class OurmenuComponent implements OnInit {
  categoryMenu: any;
  ourMenu: any;
  categoryName: any;
  loading: boolean = true;
  constructor(
    private authenticationService: AuthenticationService,
    private summaryS: SummaryService
  ) {  }

  ngOnInit() {
    this.loadOurMenu();
  }

  private loadOurMenu() {
    this.summaryS.getMenuTitle().pipe(first()).subscribe(data => {
      this.categoryMenu = data;
      this.categoryName = data[0].Name.trim();
      this.loadMenuForCate(this.categoryName);
    });
  }

  private loadMenuForCate(cateName: any) {
    this.summaryS.getMenuCategory(cateName).pipe(first()).subscribe(data => {
      this.ourMenu = data;
      this.loading = false;
    });
  }

  private changeTabMenu(cateName: any){
    this.loading = true;
    this.categoryName = cateName;
    this.loadMenuForCate(this.categoryName.trim()); 
  }
}
