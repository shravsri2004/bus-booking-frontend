import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seatbooking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seatbooking.component.html',
  styleUrl: './seatbooking.component.css'
})
export class SeatbookingComponent {
  rows = 10;  // 10 rows
  seats: any[][] = [];
  bookedSeats: string[] = [];
  selectedSeats: string[] = [];

  constructor() {
    this.createSeats();
  }

  createSeats() {
    let count = 1;

    for (let i = 0; i < this.rows; i++) {
      let row = [];

      row.push({ number: 'S' + count++, side: 'left' });
      row.push({ number: 'S' + count++, side: 'left' });
      row.push({ number: 'S' + count++, side: 'right' });
      row.push({ number: 'S' + count++, side: 'right' });

      this.seats.push(row);
    }
  }
  selectSeat(seat: string) {
  if (this.bookedSeats.includes(seat)) return;

  if (this.selectedSeats.includes(seat)) {
    this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
  } else {
    this.selectedSeats.push(seat);
  }
  }
  bookSeats() {
  this.bookedSeats.push(...this.selectedSeats);
  this.selectedSeats = [];
}
clearSeats() {
  this.selectedSeats = [];
}
}
