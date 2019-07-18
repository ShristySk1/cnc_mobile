import { Injectable } from '@angular/core';
import { Notice } from './notice.model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  currentArticle: any;
  url = 'http://192.168.142.1:8080/';
  apiKey = 'rest/notice'; // <-- Enter your own key here!
// private _notices: Notice[] = [
//   new Notice('1', 'Holiday', 'Due to some sort of circumstances, today is holiday. Sorry for inconvinence'),
//   new Notice('2', 'Farewell', 'Farewell program is resheduled to 16th September')
// ];
 _notices: object;
  constructor(private http: HttpClient) { }
  get notices() {
    return this._notices;
  }
  getDetails() {
    return this.http.get(`${this.url}${this.apiKey}`);
  }

}
