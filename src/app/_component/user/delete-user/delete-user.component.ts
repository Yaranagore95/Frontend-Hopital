import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../_service/user/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id='+id);
    this.userService.delete(id).subscribe(
        user=>{
            console.log('supprimé avec succes !');
            this.router.navigate(['/users']);
        },
        error =>{
          console.log('erreur de suppression');
        }
    );
  }

}
