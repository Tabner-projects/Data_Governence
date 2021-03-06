import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-reg/login/login.component';
import { RegistrationComponent } from './login-reg/registration/registration.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegistrationComponent];