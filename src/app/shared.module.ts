// shared.module.ts
import { NgModule } from '@angular/core';
import {ConfirmEqualValidatorDirective} from "./registration/registration.component";

@NgModule({
  declarations: [ConfirmEqualValidatorDirective],
  exports: [ConfirmEqualValidatorDirective]
})
export class SharedModule {}
