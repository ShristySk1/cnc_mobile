import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {


  currentArticle: any;
  url = 'http://192.168.142.1:8080/';
  apiKey = 'rest/timetable'; // <-- Enter your own key here!

 routine: object;
  constructor(private http: HttpClient) { }
  get routines() {
    return this.routine;
  }
  getDetails() {
    return this.http.get(`${this.url}${this.apiKey}`);
  }
}
