import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, NgModule } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { from, Observable } from 'rxjs';
import { Post } from '../models/post';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';
import { zip } from 'rxjs'
import { isEmpty } from 'rxjs/operators';  
import { Plugins } from "@capacitor/core";
import { SplashScreen } from '@capacitor/splash-screen';
export async function get(key: string): Promise<any> {
  const item = await Storage.get({ key: key });
  return JSON.parse(item.value);
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  componentDidLoad(){
    SplashScreen.hide();
  }

  posts$: Observable<Post[]>;
  history$: Observable<Post[]>;
  posts: Post[] = [];
  searchInput: string;
  searchString: string;
  
  constructor(
    private apiService: ApiService,
  ) {
  }
  setHistory = async () => {
    if(this.searchInput == "" || this.searchInput == null){
      console.log("Error occured while setting the history");
      return;
    }
    this.posts$ = this.apiService.getPosts$(this.searchInput);


    const oldHisotoryConst = from(get('history'));

    //adds old history to the new one
    this.history$ = zip(this.posts$, oldHisotoryConst)
      .pipe(map(x => x[0].concat(x[1])));

    this.history$.forEach(element => {
        Storage.set({
        key: 'history',
        value: JSON.stringify(element),
      });

    });

  };
}
