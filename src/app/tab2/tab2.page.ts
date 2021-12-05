import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { from } from 'rxjs';
export async function get(key: string): Promise<any> {
  const item = await Storage.get({ key: key });
  return JSON.parse(item.value);
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  posts: Post[] = [];
  posts$: Observable<Post[]>;
  constructor() {
    this.posts$ = from(get('history'));
    //log
    this.posts$.forEach(element => {
      console.log(element);
    });
  }
 
  
  async getHistory() {
    this.posts$ = from(get('history'));
    //log
    this.posts$.forEach(element => {
    console.log(element);
  });
  }

}
