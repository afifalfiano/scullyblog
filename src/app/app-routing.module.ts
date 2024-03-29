import { HTTP404Component } from './shared/http404/http404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleResolver } from './shared/resolver.service';

// tslint:disable-next-line:max-line-length
const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'myblogs', loadChildren: () => import('./myblogs/myblogs.module').then(m => m.MyblogsModule)},
  { path: 'myportfolios', loadChildren: () => import('./my-portfolios/my-portfolios.module').then(m => m.MyPortfoliosModule) },
  { path: 'talks', loadChildren: () => import('./talks/talks.module').then(m => m.TalksModule) },
  {path: '**', component: HTTP404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
