import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUp} from "../data-type";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authError:String='';

  constructor(private auth:AuthService,private router:Router) {}

  login(data: SignUp): void {
    this.auth.userLogin(data);
    this.auth.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
  }

  openSignUp() {
    this.router.navigate(['registration'])
  }
}
