import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyblogsComponent } from './myblogs.component';

const routes: Routes = [{ path: '', component: MyblogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyblogsRoutingModule { }
