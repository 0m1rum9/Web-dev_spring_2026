import { Component, input, output } from '@angular/core';
import { Album } from '../album.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-overview-component',
  imports: [RouterLink],
  templateUrl: './album-overview-component.html',
  styleUrl: './album-overview-component.css',
})
export class AlbumOverviewComponent {
  album = input<Album>();
  deleteId = output<number>();
  delete() {
    this.deleteId.emit(this.album()!.id);
  }
}
