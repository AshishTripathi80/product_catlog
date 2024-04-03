import {Component, Directive, Input} from '@angular/core';
import {AbstractControl, FormsModule, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {SignUp} from "../data-type";
import {NgIf} from "@angular/common";
import {SharedModule} from "../shared.module";

@Directive({
  selector: '[compareTo]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input('compareTo') otherControlName!: string;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.parent?.get(this.otherControlName);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notSame': true };
    }
    return null;
  }
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    SharedModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private auth:AuthService) {
  }
  signUp(data:SignUp):void{
    this.auth.userSignUp(data);
  }

}
