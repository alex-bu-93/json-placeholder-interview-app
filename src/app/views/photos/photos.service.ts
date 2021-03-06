import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo }      from '@widgets/paginated-photos';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PhotosService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPhotos$(): Observable<Photo[]> {
    return this.http.get<Photo[]>('photos');
  }

  getPhoto$(id: number): Observable<Photo> {
    return this.http.get<Photo>(`photos/${id}`);
  }
}
