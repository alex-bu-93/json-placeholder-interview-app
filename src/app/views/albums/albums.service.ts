import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo }      from '@widgets/paginated-photos';
import { Observable } from 'rxjs';
import { Album }      from './albums.interfaces';

@Injectable({providedIn: 'root'})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAlbums$(): Observable<Album[]> {
    return this.http.get<Album[]>('albums');
  }

  getAlbum$(id: number): Observable<Album> {
    return this.http.get<Album>(`albums/${id}`);
  }

  getAlbumPhotos$(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`albums/${id}/photos`);
  }
}
