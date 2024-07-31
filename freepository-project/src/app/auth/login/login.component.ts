import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
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
  private authService=inject(AuthService);
  private formBuilder=inject (FormBuilder);
  router = inject(Router);
  loginForm!:FormGroup;
 
ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    UserName:["", [Validators.required]],
    Password:["", [Validators.required]],
    remember:[false],
  });
  
}

Submit(): void {
  if (this.loginForm.valid) {
    const user: User = {
      UserName: this.loginForm.controls["UserName"].value,
      Password: this.loginForm.controls["Password"].value,
    };

    this.authService.login(user).subscribe({
      next: (response) => {
        console.log(response);
        this.authService.saveUserId(response.id);
        this.authService.saveToken(response.token);
        sessionStorage.setItem('UserName',this.loginForm.controls["UserName"].value)
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed: ' + error.message);
      }
    });
  }
 }
}

