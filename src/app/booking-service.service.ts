import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

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
}