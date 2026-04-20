import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BookingServiceService } from './booking-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bus-Booking-System';

  constructor(public bservice:BookingServiceService,private router: Router){}

    logout() {
    // clear token and username
    this.bservice.token = '';
    this.bservice.username = '';
    this.router.navigate(['/login']);
  }
}
