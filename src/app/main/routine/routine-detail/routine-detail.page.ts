import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutineDetailService } from './routine-detail.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.page.html',
  styleUrls: ['./routine-detail.page.scss'],
})
export class RoutineDetailPage implements OnInit {

  loadedpages: object;
  constructor(private routinedetailservice: RoutineDetailService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
     // this.loadedpages = this.routinedetailservice.notices;
  this.routinedetailservice.getDetails().subscribe(posts => {

    this.loadedpages = posts;

  });
}
// onNoticeDetailPage(routine) {
// this.routinedetailservice.currentArticle = routine;
// this.router.navigate(['/main/tabs/notice/detail/page']);
// }


  }

