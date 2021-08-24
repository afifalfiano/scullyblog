import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPortfoliosRoutingModule } from './my-portfolios-routing.module';
import { MyPortfoliosComponent } from './my-portfolios.component';


@NgModule({
  declarations: [MyPortfoliosComponent],
  imports: [
    CommonModule,
    MyPortfoliosRoutingModule,
    SharedModule
  ]
})
export class MyPortfoliosModule { }
