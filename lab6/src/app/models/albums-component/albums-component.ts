import { Component } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album } from '../album.model';
import { AsyncPipe } from '@angular/common';
import { AlbumOverviewComponent } from '../album-overview-component/album-overview-component';

@Component({
  selector: 'app-albums-component',
  imports: [AsyncPipe, AlbumOverviewComponent],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent {

  constructor(private albumService: AlbumService) { }
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albumsSubject.next(data);
    });
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albumsSubject.next(
          this.albumsSubject.value.filter(a => a.id !== id)
        );
        alert("deleted");
      },
    });
  }

}
