import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { AlbumsComponent } from './models/albums-component/albums-component';
import { AlbumDetailComponent } from './models/album-detail-component/album-detail-component';
import { AlbumPhotosComponent } from './models/album-photos-component/album-photos-component';

export const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "albums/:id", component: AlbumDetailComponent},
  { path: "albums/:id/photos", component: AlbumPhotosComponent}
];
