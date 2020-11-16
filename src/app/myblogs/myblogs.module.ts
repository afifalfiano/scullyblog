import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyblogsRoutingModule } from './myblogs-routing.module';
import { MyblogsComponent } from './myblogs.component';


@NgModule({
  declarations: [MyblogsComponent],
  imports: [
    CommonModule,
    MyblogsRoutingModule
  ]
})
export class MyblogsModule { }
