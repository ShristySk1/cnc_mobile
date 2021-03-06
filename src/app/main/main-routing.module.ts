import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'notice',
        children: [
          {
            path: '',
            loadChildren: './notice/notice.module#NoticePageModule'
          },
          {
            path: 'detail/:listId',
            loadChildren: './notice/notice-detail/notice-detail.module#NoticeDetailPageModule'
          }
        ]
      },
      {
        path: 'routine',
        children: [
          {
            path: '',
            loadChildren: './routine/routine.module#RoutinePageModule'
          },
          {
             path: 'routine-detail',
            loadChildren: './routine/routine-detail/routine-detail.module#RoutineDetailPageModule'
          }
        ]
      },
      {
          path: '',
          redirectTo: '/main/tabs/routine',
          pathMatch: 'full'
      }
    ]
  }
,
{
    path: '',
    redirectTo: '/main/tabs/routine',
    pathMatch: 'full'
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
