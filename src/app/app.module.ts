import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import
{
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule, MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule
}
    from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './_component/login/login.component';
import { LogoutComponent } from './_component/logout/logout.component';
import { DefaultComponent } from './_component/default/default.component';
import { UsersComponent } from './_component/user/users/users.component';
import {JwtInterceptor} from './_helper/jwtInterceptor';
import { UserViewComponent } from './_component/user/user-view/user-view.component';
import { EditUserComponent } from './_component/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './_component/user/delete-user/delete-user.component';
//import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        DefaultComponent,
        UsersComponent,
        UserViewComponent,
        EditUserComponent,
        DeleteUserComponent,
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        // Material
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
        MatTableModule,
        // FlexLayout
        FlexLayoutModule,
        //AngularFontAwesomeModule
        //AngularFontAwesomeModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
