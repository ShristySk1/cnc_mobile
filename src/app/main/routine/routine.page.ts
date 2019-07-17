import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {
posts: object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://192.168.142.1:8080/rest/timetable').subscribe(posts => {

      this.posts = posts;
      console.log(posts);
    });
  }

}
