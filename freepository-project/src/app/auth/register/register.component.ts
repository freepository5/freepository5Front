import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private formBuilder= inject(FormBuilder);
  private authService=inject(AuthService);
  router = inject(Router);
  registerForm!:FormGroup;
  
  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      userName:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required]],
    });
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      const userData=this.registerForm.value;

      this.authService.register(userData).subscribe({
        next:(response)=>{
          console.log(response);
          this.authService.saveUserId(response.id)
          this.authService.saveToken(response.token);
          window.location.reload();
        },
        error:(error)=>{
          console.error('Error during register',error);
        }

      });
    }
  }
}
