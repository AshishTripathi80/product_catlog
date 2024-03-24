import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {UserHomeComponent} from "./user-home/user-home.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'user-home',component:UserHomeComponent},
  {path: 'product-details', component:ProductDetailsComponent}
];
