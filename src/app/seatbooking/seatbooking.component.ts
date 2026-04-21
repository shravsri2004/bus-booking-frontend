import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-seatbooking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seatbooking.component.html',
  styleUrl: './seatbooking.component.css'
})
export class SeatbookingComponent implements OnInit {

  rows = 10;
  seats: any[][] = [];

  bookedSeats: string[] = [];
  selectedSeats: string[] = [];

  schedule: any;

  // passenger form + toggle
  passengers: any[] = [];
  showForm = false;

  constructor(
    private route: ActivatedRoute,
    private service: BookingServiceService,
    private router:Router
  ) {
    this.createSeats();
  }

  ngOnInit(): void {

    //  convert id to number
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log("Schedule ID:", id);

    this.getScheduleById(id);
    this.loadBookedSeats(id);
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

    //  prevent selecting already booked seat
    if (this.bookedSeats.includes(seat)) return;

    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  //: now opens passenger form instead of directly booking
  bookSeats() {

    this.passengers = this.selectedSeats.map(seat => ({
      name: '',
      age: '',
      seatNo: seat   //  send "S1", "S2"
    }));

    this.showForm = true;
  }

  clearSeats() {
    this.selectedSeats = [];
  }

  // : final submit API
submitBooking() {

  const bookingData = {
    bookingDt: new Date().toISOString().split('T')[0],
    schId: Number(this.route.snapshot.paramMap.get('id')),
    passenger: this.passengers
  };

  console.log("FINAL DATA:", bookingData);

  this.service.createBooking(bookingData).subscribe({

    next: (res) => {

      console.log("Booking Success", res);

     
      this.bookedSeats.push(...this.selectedSeats);
      this.selectedSeats = [];
      this.passengers = [];
      this.showForm = false;

      
      Toastify({
        text: "🎉 Booking Confirmed Successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745",
        close: true
      }).showToast();

     
      setTimeout(() => {
        this.router.navigate(['/schedules']);
      }, 1500);
    },

    error: (err) => {

      console.error("Booking Failed", err);

      Toastify({
        text: err?.error?.errormsg || "❌ Booking Failed!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc3545",
        close: true
      }).showToast();

    } 

  }); 

}

  getScheduleById(id: number) {
    this.service.getScheduleById(id).subscribe(res => {
      this.schedule = res;
      console.log("Schedule Data:", res);
    });
  }

  loadBookedSeats(id: number) {
    this.service.getBookedSeats(id).subscribe(res => {
      this.bookedSeats = res;
      console.log("Booked Seats:", res);
    });
  }
}