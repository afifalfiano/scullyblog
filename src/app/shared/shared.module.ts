import { StringFilterPipe } from './../string-filter.pipe';
import { CaptionPipe } from './../caption.pipe';
import { FooterComponent } from './../footer/footer.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCountPipe } from '../word-count.pipe';



@NgModule({
  declarations: [NavigationComponent, FooterComponent, CaptionPipe, StringFilterPipe, WordCountPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    CaptionPipe,
    StringFilterPipe,
    WordCountPipe
  ]
})
export class SharedModule { }
