import { CanActivateFn, Router } from '@angular/router';
import { BookingServiceService } from './booking-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const bService=inject(BookingServiceService);
   const router =inject(Router);
  if(localStorage.getItem('token')){
  return true;}

  router.navigate(['/login']);
  return false;
};
