import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private bookingService: BookingServiceService,
    private router: Router,
  ) {}

  signupData = {
    name: '',
    userName: '',
    phoneNo: '',
    password: '',
  };
  errmsg: string = '';

  doSignUp() {
    this.errmsg = '';

    this.bookingService.doSignUp(this.signupData).subscribe({
      next: (res: any) => {
        console.log('Signup Success', res);

        alert('User registered successfully');

        // redirect to login
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup Failed', err);
      
          this.errmsg=err.error.errormsg
        

       
      },
    });
  }
}
