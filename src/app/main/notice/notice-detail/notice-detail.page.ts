import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.page.html',
  styleUrls: ['./notice-detail.page.scss']
})
export class NoticeDetailPage implements OnInit {
  notice;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private noticeService: NoticeService,
 
  ) {
    // this.notice = this.navParams.get('listId');
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('listId'){
    //     this.navCtrl.navigateBack('/main/tabs/notice');
    //     return;
    //   }
    // this.notice=this.noticeService.notices.find(p => p.)
    // );
    // });
    // let id = this.route.snapshot.paramMap.get('noticeId');
    // // Get the information from the API
    // this.noticeService.getDetails(id).subscribe(result => {
    //   this.information = result;
    //   console.log(this.information);
    // });
    this.notice = this.noticeService.currentArticle;

  }
}
