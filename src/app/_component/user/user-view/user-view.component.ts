import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../_model/user';
import {Role} from '../../../_model/role';
declare var $: any;


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  roles : Role[] = [];
  user : User = new User();
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getOne(id).subscribe(
        user=>{
            this.user = user;
            this.roles = user.roles;
            console.log("role = "+this.roles);
        }
    );
      // $(document).ready(() => {
      //     $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
      // });
  }

}
