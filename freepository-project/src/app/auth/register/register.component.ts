import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      name:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(){
    if(this.registerForm.valid){
      const formData=this.registerForm.value;

      this.authService.register(formData).subscribe({
        next:(response)=>{
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
