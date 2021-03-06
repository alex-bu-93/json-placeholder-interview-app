import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post }       from './posts.interfaces';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts$(): Observable<Post[]> {
    return this.http.get<Post[]>('posts');
  }

  getPost$(id: number): Observable<Post> {
    return this.http.get<Post>(`posts/${id}`);
  }
}
