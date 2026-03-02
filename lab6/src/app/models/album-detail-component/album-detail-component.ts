import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Observable, switchMap } from 'rxjs';
import { Album } from '../album.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-album-detail-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent {
  albumId!: number;
  album$!: Observable<Album>
  title = signal<String>("");
  ngOnInit() {
    this.album$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.albumId = Number(params.get('id'));
        return this.albumService.getAlbum(this.albumId);
      })
    );
    this.album$.subscribe(album => {
      this.title.set(album.title);
    });
  }
  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }
  change(event: Event) {
    const input = event.target! as HTMLInputElement;
    this.title.set(input.value)
  }
  save() {
    this.albumService.setTitle(this.albumId, this.title()).subscribe({
      next: () => {
        alert("saved");
      }
    })
  }
}
