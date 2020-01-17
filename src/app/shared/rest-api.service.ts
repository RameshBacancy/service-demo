import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../shared/post';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
getPosts():Observable<Post> {  
    return this.http.get<Post>(this.url);  
  }  
  getPost(id):Observable<Post> {  
    return this.http.get<Post>(this.url+'/'+id);  
  }  
  createPost(post):Observable<Post> {  
    return this.http.post<Post>(this.url, JSON.stringify(post))  
  }  
  
  updatePost(post):Observable<Post>{  
    return this.http.put<Post>(this.url + '/' + post.id, JSON.stringify({title:post.title,body:post.body}))  
  }  
  
  deletePost(id):Observable<Post> {  
    return this.http.delete<Post>(this.url + '/' + id);  
  }

}