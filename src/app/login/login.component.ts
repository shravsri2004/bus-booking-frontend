import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // form data
  loginData = {
    username: '',
    password: '',
  };
   
  errmsg:any;

  constructor(
    private bookingService: BookingServiceService,
    private router: Router,
  ) {}

  onLogin() {
    console.log('Login Data:', this.loginData);

    this.bookingService.dologin(this.loginData).subscribe({
      next: (response: any) => {
        console.log('Login Success:', response);

        // assuming backend returns token
        this.bookingService.token = response.token;
        this.bookingService.username = this.loginData.username;

        // store in localStorage (important)
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.loginData.username);

        // redirect
        this.router.navigate(['/booking']);
      },
      error: (error?:any) => {
        console.error('Login Failed', error);
         this.errmsg=error.error?.errormsg //|| 'Invalid username or password';
;
        alert('Invalid Username or Password');
      },
    });
  }


}