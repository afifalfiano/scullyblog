import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPortfoliosComponent } from './my-portfolios.component';

const routes: Routes = [{ path: '', component: MyPortfoliosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPortfoliosRoutingModule { }
