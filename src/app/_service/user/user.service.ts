import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../auth/authentication.service';
import {User} from '../../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public getUser(){
      return this.http.get<User[]>("http://localhost:8080/API/users");
  }

  public addUser(user : User){
      console.log(user.role.toString());
      return this.http.post<User>("http://localhost:8080/API/signup",user);
  }

  public getOne(id: number){
      return this.http.get<User>("http://localhost:8080/API/user/"+id);
  }

  public delete(id: number){
      return this.http.delete<User>("http://localhost:8080/API/user-delete/"+id);
  }
}
