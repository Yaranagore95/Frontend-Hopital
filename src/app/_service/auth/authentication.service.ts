import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../../_model/user';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';
import {Role} from '../../_model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    authenticate: boolean = false;
    jwtHelper = new JwtHelper();
    role : Role[] = [];
    private currentUserSubject: BehaviorSubject<User>;
    private currentUser : Observable<User>;
    constructor(private http : HttpClient, private route: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User{
        return this.currentUserSubject.value;
    }

    public login(username: string, password: string){
        return this.http.post<any>("http://localhost:8080/token/generate-token",{username,password}).
        pipe(map(user =>{
            if (user && user.token){
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
                this.role = this.jwtHelper.decodeToken(user.token).scopes;
                console.log(this.role);
                this.currentUserSubject.next(user);
                this.authenticate = true;
            }
        }));
    }

    public logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.authenticate = false;
    }

    public getRole(){
       return this.role;
    }

}

