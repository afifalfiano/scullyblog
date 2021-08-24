import { SharedModule } from './../shared/shared.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyblogsRoutingModule } from './myblogs-routing.module';
import { MyblogsComponent } from './myblogs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleService } from '../shared/article.service';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [MyblogsComponent],
  imports: [
    CommonModule,
    MyblogsRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
})
export class MyblogsModule { }
