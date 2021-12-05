import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiBase = "https://api.api-ninjas.com/v1/nutrition?query=";
  headers = new HttpHeaders().set("X-Api-Key", "NTlZYE57KIIBHprhk8zSMQ==xMrhSvBeKmqFVWyf");

  constructor(
    private http: HttpClient
  ) { }

  getPosts$(name){
    return this.http.get<Post[]>(this.apiBase + name,
      {headers: this.headers}
      );
  }
  getPost$(name){
    return this.http.get<Post>(this.apiBase + name,
      {headers: this.headers}
      );
  }
}
