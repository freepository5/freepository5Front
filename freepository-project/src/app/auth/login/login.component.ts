import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private loginService=inject(AuthService);
  private formBuilder=inject (FormBuilder);
  loginForm!:FormGroup;
 
    
ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(10)]]
  });
  
}

Submit(): void{
  const user:User={
    email:this.loginForm.controls["email"].value,
    password:this.loginForm.controls["password"].value,
  }
  if(this.loginForm.valid){
    this.loginService.login(user);
  }
 }
}

