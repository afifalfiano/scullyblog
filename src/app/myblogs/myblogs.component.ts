import { Component, OnInit, ElementRef, ViewChild, ErrorHandler, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../shared/services/article.service';
import { Like } from '../shared/featured-post/featured-post.component';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css'],
})
export class MyblogsComponent implements OnInit {
  myblogs: any = [];
  previewBlog: any = [];
  p = 1;
  isLoaded = false;
  categoryData = [
    {
      category: 'Technology',
      class: 'bg-primary text-white'
    },
    {
      category: 'Design',
      class: 'bg-danger text-white'
    },
    {
      category: 'Dream',
      class: 'bg-secondary text-white'
    },
    {
      category: 'Improvement',
      class: 'bg-warning text-white'
    },
    {
      category: 'Methodology',
      class: 'bg-primary text-white'
    },
    {
      category: 'Story',
      class: 'bg-success text-white'
    },
    {
      category: 'Tutorial',
      class: 'bg-secondary text-white'
    },
  ];
  updateFireStore: any = [];
  countLike = 0;
  private itemCollection: AngularFirestoreCollection<Like>;
  items: Observable<Like[]>;
  constructor(
    private router: Router,
    private articleSvc: ArticleService,
    private readonly firestoreSvc: AngularFirestore,
  ) {
    this.itemCollection = this.firestoreSvc.collection<Like>('items');
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit(): any {
    this.getBlog();
  }

  getBlog(): any {
    const dataLocal = localStorage.getItem('articles');
    if (dataLocal) {
      this.myblogs = JSON.parse(dataLocal);
      this.previewBlog.push(this.myblogs[0]);
    }
    if (this.myblogs) {
      this.onUpdateLike(this.myblogs);
    }
  }

  onUpdateLike(dataBlog: any): any {
    console.log(dataBlog);
    this.items.subscribe(response => {
      console.log(response, 'a');
      response.forEach(like => {
        console.log(like);
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

  onClapButton(idPost: string, $event: any): any {
    console.log($event, 'e');
    let id = idPost;
    let like: Like = {id, count: $event.like + 1, route: $event.route};
    if (id) {
      this.itemCollection.doc(id).update(like);
    } else {
      id = this.firestoreSvc.createId();
      like = {id, count: $event.like + 1, route: $event.route};
      this.itemCollection.doc(id).set(like);
    }
    localStorage.setItem('articles', JSON.stringify(this.updateFireStore));
    this.getBlog();
  }

}
