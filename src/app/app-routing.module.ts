import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule', canLoad : [AuthGuard]}
  // { path: 'routine', loadChildren: './main/routine/routine.module#RoutinePageModule' },
  // { path: 'notice', loadChildren: './main/notice/notice.module#NoticePageModule' }
  // { path: 'routine', loadChildren: './routine/routine.module#RoutinePageModule' },
  // { path: 'notice', loadChildren: './notice/notice.module#NoticePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
