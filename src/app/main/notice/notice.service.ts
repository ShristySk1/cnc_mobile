import { Injectable } from '@angular/core';
import { Notice } from './notice.model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
private _notices: Notice[] = [
  new Notice('1', 'Holiday', 'Due to some sort of circumstances, today is holiday. Sorry for inconvinence'),
  new Notice('2', 'Farewell', 'Farewell program is resheduled to 16th September')
];
  constructor() { }
  get notices() {
    return this._notices;
  }
}
