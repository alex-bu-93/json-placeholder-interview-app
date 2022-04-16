import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
