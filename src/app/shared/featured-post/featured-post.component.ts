import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';

export interface Like {
  id?: string;
  count: number;
  route: string;
}

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  recentBlog: any = [];
  updateFireStore: any[] = [];
  countLike = 0;
  private itemCollection: AngularFirestoreCollection<Like>;
  items: Observable<Like[]>;
  constructor(
    private router: Router,
    private articleSvc: ArticleService,
    private readonly firestoreSvc: AngularFirestore,
    private firebase: FirebaseApp
  ) {
    this.itemCollection = this.firestoreSvc.collection<Like>('items');
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit(): void {
    this.onlyGetBlog();
  }

  onClapButton(idPost: string, $event: any): any {
    let id = idPost;
    let like: Like = {id, count: $event.like + 1, route: $event.route};
    if (id) {
      this.itemCollection.doc(id).update(like);
    } else {
      id = this.firestoreSvc.createId();
      like = {id, count: $event.like + 1, route: $event.route};
      this.itemCollection.doc(id).set(like);
    }
    this.onlyGetBlog();
    localStorage.setItem('articles', JSON.stringify(this.updateFireStore));
  }

  onUpdateLike(dataBlog: any): any {
    this.items.subscribe(response => {
      response.forEach(like => {
        dataBlog.forEach((item: any) => {
          if (item.route === like.route) {
            item.like = like.count;
            item.idPost = like.id;
          }
        });
      });
      this.updateFireStore = dataBlog;
    });
  }

  goToBlogs(): any {
    this.router.navigateByUrl('/myblogs');
  }

  onlyGetBlog(): any {
    let dataTemp = [];
    if (localStorage.getItem('articles')) {
      const dataLocal = localStorage.getItem('articles');
      if (dataLocal) {
        const data = JSON.parse(dataLocal);
        dataTemp = data;
      }
    } else {
      this.articleSvc.getData().subscribe((response: any) => {
        const data = response;
        dataTemp = data;
      });
    }
    const dataBlog = dataTemp.map((item: any, index: number) => {
      if (index < 4) {
        return item;
      }
  });
    const dataFix = dataBlog.filter((item: any) => item !== undefined);
    this.recentBlog = dataFix;
    if (this.recentBlog) {
      this.onUpdateLike(this.recentBlog);
    }
  }

}
