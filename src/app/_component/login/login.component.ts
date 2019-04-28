import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_service/auth/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private formLogin : FormGroup;
    private submitted : boolean = false;
    private loading : boolean = false;
    private returnUrl : string;
    private error = "";
    constructor(private router: Router, private route: ActivatedRoute,
                private authService: AuthenticationService, private formBuilder: FormBuilder) {
        if (localStorage.getItem("curreuntUser")){
            this.router.navigate(['/'])
        }
    }

    get f(){ return this.formLogin.controls}
    onSubmit() {
        this.submitted = true;
        if (this.formLogin.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
            data => {
                this.router.navigate(['/']);
            },
            error => {
                this.error = error;
                this.loading = false;
            }
        );
    }

    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            username : ['', Validators.required],
            password : ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
}
