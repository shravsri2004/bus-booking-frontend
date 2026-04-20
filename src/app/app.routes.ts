import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookpageComponent,canActivate:[authGuard] },
  { path: 'schedules', component: ScheduleComponent,canActivate:[authGuard] },
  { path: 'seatbooking/:id', component: SeatbookingComponent,canActivate:[authGuard] },

  { path: '', component: LoginComponent ,canActivate:[authGuard]},
];
