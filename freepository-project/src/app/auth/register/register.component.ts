import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private formBuilder= inject(FormBuilder)
  router = inject(Router);
  registerForm!:FormGroup;

  ngOnInit(): void {
      
    this.registerForm=this.formBuilder.group({
      name:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(){
    if(this.registerForm.valid){

      const formData = this.registerForm.value;

      name: this.registerForm.controls["name"].value;
      email:this.registerForm.controls["email"].value;
      password:this.registerForm.controls["password"].value;
    } 
  }
}
