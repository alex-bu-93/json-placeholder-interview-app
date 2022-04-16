import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo }      from './photos.interfaces';

@Injectable({providedIn: 'root'})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts$(term?: string): Observable<Photo[]> {
    return this.http.get<Photo[]>('photos');
  }
}
