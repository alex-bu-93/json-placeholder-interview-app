import { Injectable }                     from '@angular/core';
import { HttpClient }                     from '@angular/common/http';
import { forkJoin, map, Observable }      from 'rxjs';
import { Dashboard, LastPhoto, LastPost } from './dashboard.interfaces';

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) {
  }

  getDashboard$(): Observable<Dashboard> {
    return forkJoin([
      this.http.get<LastPhoto[]>('photos'),
      this.http.get<LastPost[]>('posts')
    ]).pipe(map(([lastPhotos, lastPosts]) => ({lastPhotos, lastPosts})));
  }
}
