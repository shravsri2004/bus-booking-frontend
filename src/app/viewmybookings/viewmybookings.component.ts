import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-viewmybookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './viewmybookings.component.html',
  styleUrl: './viewmybookings.component.css',
})
export class ViewmybookingsComponent implements OnInit {
  bookings: any[] = [];
  isLoading: boolean = true;
  errorMsg: string = '';

  constructor(private service: BookingServiceService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.service.getBookings().subscribe({
      next: (res: any) => {
        this.bookings = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load bookings';
        this.isLoading = false;
      },
    });
  }
}
