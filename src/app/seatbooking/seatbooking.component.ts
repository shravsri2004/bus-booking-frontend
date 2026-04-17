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

  // ✅ Create 40 seats (2+2 layout)
  createSeats() {
    let count = 1;

    for (let i = 0; i < this.rows; i++) {
      let row = [];

      // Left side (2 seats)
      row.push({ number: 'S' + count++, side: 'left' });
      row.push({ number: 'S' + count++, side: 'left' });

      // Right side (2 seats)
      row.push({ number: 'S' + count++, side: 'right' });
      row.push({ number: 'S' + count++, side: 'right' });

      this.seats.push(row);
    }
  }
}
