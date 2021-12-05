import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  post$: Observable<Post>;
  
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { 
    const name = this.route.snapshot.paramMap.get("name");
    console.log("This is name log:" +name);
    this.post$ = this.apiService.getPost$(name);
    console.log("This is post log:" +this.post$);
    this.post$.subscribe(console.log);
  }

  ngOnInit() {
  }

}
