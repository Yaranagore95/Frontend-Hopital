import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './_component/login/login.component';
import {LogoutComponent} from './_component/logout/logout.component';
import {DefaultComponent} from './_component/default/default.component';
import {UsersComponent} from './_component/user/users/users.component';
import {UserViewComponent} from './_component/user/user-view/user-view.component';
import {EditUserComponent} from './_component/user/edit-user/edit-user.component';
import {DeleteUserComponent} from './_component/user/delete-user/delete-user.component';


const routes: Routes = [
    {path : '', component: DefaultComponent },
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user/:id', component: UserViewComponent},
    {path: 'edit-user/:id', component: EditUserComponent},
    {path: 'delete-user/:id', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
