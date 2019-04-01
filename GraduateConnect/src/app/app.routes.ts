import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { OtherComponent } from './other/other.component';
//import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

export const router: Route[] = [

        
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent }]
    //{ path: 'members', component: OtherComponent, canActivate: [AuthGuard]}
