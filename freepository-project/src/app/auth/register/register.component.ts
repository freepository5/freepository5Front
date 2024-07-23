import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private formBuilder= inject(FormBuilder);
  private authService=inject(AuthService);
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
      });
    }
  }
}









