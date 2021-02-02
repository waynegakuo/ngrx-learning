import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import * as PostActions from './states/post.actions';

interface AppState {
  message: string;
}

interface AppState2 {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxFire';
  message$: Observable<string>;

  post$: Observable<Post>;
  text: string; /// from input val

  constructor(private store: Store<AppState>, private store2: Store<AppState2>) {
    this.message$ = this.store.select('message');

    this.post$ = this.store2.select('post');
  }

  // tslint:disable-next-line: typedef
  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  // tslint:disable-next-line: typedef
  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  // tslint:disable-next-line: typedef
  editText(){
    this.store2.dispatch(new PostActions.EditText(this.text));
  }
  // tslint:disable-next-line: typedef
  resetPost(){
    this.store2.dispatch(new PostActions.Reset());
  }
  // tslint:disable-next-line: typedef
  upVote(){
    this.store2.dispatch(new PostActions.Upvote());
  }
  // tslint:disable-next-line: typedef
  downVote(){
    this.store2.dispatch(new PostActions.Downvote());
  }


}
