import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './_service/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hopital Front';
  authenticate: boolean;
  constructor(public authUser : AuthenticationService){}

  ngOnInit(): void {
      this.authenticate = this.authUser.authenticate;
      this.updateAuthenticate();
  }

  updateAuthenticate(){
    if (this.authUser.currentUserValue){
      this.authUser.authenticate = true;
    }
    else {
      this.authUser.authenticate = false;
    }
  }

}
