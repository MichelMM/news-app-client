import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeadlinesComponent} from './pages/headlines/headlines.component';

const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'noticias', component: HeadlinesComponent },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
