import { HttpInterceptorFn } from '@angular/common/http';
import { Inject, inject } from '@angular/core';
import { BookingServiceService } from './booking-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const bookingService = inject(BookingServiceService);

  if (bookingService.token) {
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${bookingService.token}`,
      ),
    });

    return next(modifiedReq);
  }

  return next(req);
};
