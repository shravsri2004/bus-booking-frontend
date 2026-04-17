import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'booking',component:BookpageComponent},
    {path:'schedules',component:ScheduleComponent},
    {path:'seatbooking',component:SeatbookingComponent},

    {path:'',redirectTo:'login',pathMatch:'full'}
];