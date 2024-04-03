import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] }
];


