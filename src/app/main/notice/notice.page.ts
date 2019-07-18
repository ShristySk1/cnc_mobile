import { Component, OnInit } from '@angular/core';
import { NoticeService } from './notice.service';
import { Notice } from './notice.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
loadedpages: object;
  constructor(private noticeservice: NoticeService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  // this.loadedpages = this.noticeservice.notices;
  this.noticeservice.getDetails().subscribe(posts => {

      this.loadedpages = posts;

    });
  }
  onNoticeDetailPage(notice) {
this.noticeservice.currentArticle = notice;
this.router.navigate(['/main/tabs/notice/detail/page']);
  }

}
