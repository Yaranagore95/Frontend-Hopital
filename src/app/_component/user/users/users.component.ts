import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../../_model/user';
import {UserService} from '../../../_service/user/user.service';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RoleService} from '../../../_service/role/role.service';
import {Role} from '../../../_model/role';
import {AuthenticationService} from '../../../_service/auth/authentication.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    user = new User();
    roles: Role[] = [];
    private submitted : boolean = false;
    private loading : boolean = false;
    private returnUrl : string;
    private error = "";
    private formAdd : FormGroup;
    constructor(private userService: UserService, private formBuilder: FormBuilder, private route: ActivatedRoute,
                private  router: Router, private roleService: RoleService, private authUser: AuthenticationService) {
    }

    ngOnInit() {
        this.getUsers();
        this.formAdd = this.formBuilder.group({
            nom : ['', Validators.required],
            prenom : ['', Validators.required],
            matricule : ['', Validators.required],
            username : ['', Validators.required],
            password : ['', Validators.required],
            password2: ['', Validators.required],
            profil: [''],
            role: ['', Validators.required]
        });
        this.roleService.getRoles().pipe(first()).subscribe(
            roles =>{
                this.roles = roles;
            }
        );
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    public get f(){
        return this.formAdd.controls;
    }
    onSubmit(){
        this.submitted = true;
        if (this.formAdd.invalid){
            return;
        }
        this.loading = true;
        this.user.nom = this.f.nom.value;
        this.user.username = this.f.username.value;
        this.user.prenom = this.f.prenom.value;
        this.user.matricule = this.f.matricule.value;
        this.user.role = this.f.role.value;
        this.user.photo = this.f.profil.value;
        this.user.changed = 0;
        this.user.enabled = 1;
        this.user.password = this.f.password.value;
        console.log("img = "+this.user.photo);
        if (this.user.password === this.f.password2.value){
            this.userService.addUser(this.user).pipe(first()).subscribe(
                data=>{
                    console.log("data = "+data);
                },
                error =>{
                    this.error = error;
                    this.loading = false;
                }
            );
        }
        else{
            this.error = "mot de passe non identique";
            this.loading = false;
            return;
        }


        return this.router.navigate(['/']);
    }
    getUsers() {
        if (this.authUser.currentUserValue){
            this.userService.getUser().pipe(first()).subscribe(
                users => {
                    console.log('users = ' + users);
                    this.users = users;
                }
            );
        }
    }
    headElements = ['NOM', 'PRENOM', 'MATRICULE', 'USERNAME', 'VIEW','EDIT', 'DELETE'];
}
