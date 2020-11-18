import { StringFilterPipe } from './../string-filter.pipe';
import { CaptionPipe } from './../caption.pipe';
import { FooterComponent } from './../footer/footer.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NavigationComponent, FooterComponent, CaptionPipe, StringFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CaptionPipe,
    StringFilterPipe
  ]
})
export class SharedModule { }
