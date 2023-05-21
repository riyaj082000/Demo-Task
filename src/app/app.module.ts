import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from'@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegisterFormComponent,
    WelcomeComponent,
    UserDetailsComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
