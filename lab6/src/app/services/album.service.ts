import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "../models/album.model";
import { Injectable } from "@angular/core";
import { Photo } from "../models/photo.model";

@Injectable({
  providedIn: "root"
})

export class AlbumService {
  // private baseUrl = "http://localhost:7860/api"
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }
  deleteAlbum(id: number) {
    return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }
  getAlbum(albumId: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${albumId}`)
  }
  getPhotos(albumId: number) : Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }
  setTitle(albumId: number, title: String) {
    return this.http.put(`${this.baseUrl}/albums/${albumId}`, {title: title});
  }
}
