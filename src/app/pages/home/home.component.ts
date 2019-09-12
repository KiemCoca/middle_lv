import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { first } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  open: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      if(user.colorthame)
        $("#changeable-colors").attr('href', "./assets/css/colors/" + user.colorthame + ".css");
      else
        $("#changeable-colors").attr('href', "./assets/css/colors/orange.css");
    });
  }

  ngOnInit() {
    //this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  openTabColor(){
    this.open = this.open ? false : true;
  }

  changeColorThemes(color: string){
    this.userService.changecolor(this.currentUser.username, color).pipe(first()).subscribe(() => {
      this.currentUser.colorthame = color;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
