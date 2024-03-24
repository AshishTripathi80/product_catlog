import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SignUp} from "../data-type";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginError=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }



  userSignUp(data:SignUp){
    return this.http.post('http://localhost:8081/auth',data,{observe:'response'})
      .subscribe((result)=>{
        this.router.navigate(['user-home'])
      })
  }

  userLogin(data: SignUp) {
    return this.http.post('http://localhost:8081/auth/login', data, { observe: 'response' })
      .subscribe(
        (result) => {
          if (result && result.body) {
            this.isLoginError.emit(false);
            localStorage.setItem('user', JSON.stringify(result.body));
            this.router.navigate(['user-home']);
          }
        },
        (error) => {
          console.error("Login Failed:", error);
          this.isLoginError.emit(true);
          // Optionally, you can extract the error message from the error object and display it on the UI.
          const errorMessage = error.error.message; // Assuming the error response contains a message field.
          console.error(errorMessage); // Log the error message to the console.
          // Handle displaying the error message on the UI as per your UI design.
        }
      );
  }

}
