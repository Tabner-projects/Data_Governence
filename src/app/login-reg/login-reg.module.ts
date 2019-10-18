import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotPswdComponent],
  imports: [
    CommonModule
  ]
})
export class LoginRegModule { }
