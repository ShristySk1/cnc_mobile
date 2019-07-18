import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { RoutineService } from './routine.service';
import { Routine } from './routine.model';
@Component({
  selector: 'app-routine',
  templateUrl: './routine.page.html',
  styleUrls: ['./routine.page.scss'],
})
export class RoutinePage implements OnInit {
  public counter = [1, 2, 3, 4, 5];
posts: object;
  constructor(private http: HttpClient, private routineservice: RoutineService) { }

  ngOnInit() {
    this.routineservice.getDetails().subscribe(posts => {

  this.posts = posts;
  console.log(this.posts);
    });
  }


}
