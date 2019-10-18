import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm= this.fb.group({
    username:['',[Validators.required, Validators.minLength(4), Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]]
  });

  ngOnInit() {
  }

  getDetails(event){
    event.preventDeafult();
    console.log(this.loginForm.value);
  }
}
