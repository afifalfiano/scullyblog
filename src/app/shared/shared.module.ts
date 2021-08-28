import { StringFilterPipe } from './pipe/string-filter.pipe';
import { CaptionPipe } from './pipe/caption.pipe';
import { FooterComponent } from './footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCountPipe } from './pipe/word-count.pipe';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { HeroComponent } from './hero/hero.component';
import { NavAComponent } from './nav-a/nav-a.component';
import { SubsribeBlogComponent } from './subsribe-blog/subsribe-blog.component';
import { ArticleService } from './services/article.service';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SafePipe } from './pipe/safe.pipe';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [FooterComponent, CaptionPipe, StringFilterPipe, WordCountPipe, AboutMeComponent, ExperienceComponent, PortfolioComponent, FeaturedPostComponent, HeroComponent, NavAComponent, SubsribeBlogComponent, SafePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    ScullyLibModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  exports: [
    FooterComponent,
    CaptionPipe,
    StringFilterPipe,
    WordCountPipe,
    HeroComponent,
    AboutMeComponent,
    ExperienceComponent,
    FeaturedPostComponent,
    PortfolioComponent,
    NavAComponent,
    SubsribeBlogComponent,
    ScullyLibModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [ArticleService]
})
export class SharedModule {}
