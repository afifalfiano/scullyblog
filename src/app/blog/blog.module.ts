import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule, NgxPaginationModule],
})
export class BlogModule {}
