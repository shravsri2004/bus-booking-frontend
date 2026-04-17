import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent {

  src: string = '';
  dest: string = '';
  date: string = '';

 
  constructor(
    private router: Router,
    private bookingService: BookingServiceService
  ) {}

  searchBuses() {

    const data = {
      src: this.src,
      dest: this.dest,
      date: this.date
    };

    
    this.bookingService.setSearchData(data);

    
    this.router.navigate(['/schedules']);
  }
}
