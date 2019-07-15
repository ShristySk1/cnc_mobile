import { Component, OnInit } from '@angular/core';
import { NoticeService } from './notice.service';
import { Notice } from './notice.model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
private loadedpages: Notice[];
  constructor(private noticeservice: NoticeService) { }

  ngOnInit() {
  this.loadedpages = this.noticeservice.notices;
  }

}
