import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
   schedules: any[] = [];
  loading: boolean = true;
  error:any;

  errmsg:any;

  constructor(private bookingService: BookingServiceService, private router:Router) {}

  ngOnInit(): void {

    // 🔥 call API
    this.bookingService.getSchedules()?.subscribe({
      
      next: (res: any) => {
        this.schedules = res;
        this.loading = false;
        console.log(res);
      },

      error: (err) => {
        this.error = "Failed to load schedules";
        this.loading = false;
        this.errmsg=err.error.errormsg;
        console.error(err);
      }

    });

}

goToSeats(rsId:number){
this.router.navigate(['/seatbooking',rsId])
}

}