import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'registerForm',component:RegisterFormComponent},
  // {path:'header',component:HeaderComponent},
 { path: 'header', 
    component: HeaderComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'userDetails', component: UserDetailsComponent },
      { path: 'logout', component: LogoutComponent }]},

    // {path:'welcome',component:WelcomeComponent},
    // {path:'userDetails',component:UserDetailsComponent},
    // {path:'logout',component:LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
