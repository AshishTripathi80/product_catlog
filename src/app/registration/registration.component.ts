import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private auth:AuthService) {
  }
  signUp(data:object):void{
    console.warn(data)
    this.auth.userSignUp(data).subscribe((result)=>{
      console.warn(result)
    });
  }

}
