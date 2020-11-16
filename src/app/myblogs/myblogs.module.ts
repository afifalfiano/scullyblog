import { SharedModule } from './../shared/shared.module';
import { FooterComponent } from './../footer/footer.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyblogsRoutingModule } from './myblogs-routing.module';
import { MyblogsComponent } from './myblogs.component';


@NgModule({
  declarations: [MyblogsComponent],
  imports: [
    CommonModule,
    MyblogsRoutingModule,
    SharedModule
  ]
})
export class MyblogsModule { }
