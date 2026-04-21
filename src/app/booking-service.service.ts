import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {


  //for login 
  token?:string='';
  username?:string='';
  

  get ltoken(): string | null {
  return localStorage.getItem('token');
}



  private searchData: any;

  constructor(private httpClient: HttpClient) {}


  setSearchData(data: any) {
    this.searchData = data;
  }

 
  getSearchData() {
    return this.searchData;
  }

 
  getSchedules() {

    const data = this.getSearchData();

    const params = new HttpParams()
      .set('src', data?.src || '')
      .set('dest', data?.dest || '')
      .set('date', data?.date || '');

    return this.httpClient.get('http://localhost:8080/bus/schedules', { params });
  
}

dologin(credentials:any):Observable<any>{
  return this.httpClient.post('http://localhost:8080/login',credentials)

}

doSignUp(credentials:any):Observable<any>{
 return this.httpClient.post('http://localhost:8080/auth/signup',credentials)
}

getScheduleById(id:any) {
  return this.httpClient.get(`http://localhost:8080/bus/schedules/${id}`);
}

getBookedSeats(scheduleId: number) {
  return this.httpClient.get<string[]>(
    `http://localhost:8080/bus/schedules/${scheduleId}/seats`
  );
}

createBooking(data: any) {
  return this.httpClient.post("http://localhost:8080/bus/addbusbooking", data);
}

getBookings(){
  return this.httpClient.get(`http://localhost:8080/bus/bookings`);
}




}