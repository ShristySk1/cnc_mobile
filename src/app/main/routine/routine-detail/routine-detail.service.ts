import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineDetailService {

  currentArticle: any;
  url = 'http://192.168.142.1:8080/';
  apiKey = 'rest/notice'; // <-- Enter your own key here!

 _routines: object;
  constructor(private http: HttpClient) { }
  get routines() {
    return this._routines;
  }
  getDetails() {
    return this.http.get(`${this.url}${this.apiKey}`);
  }


}
