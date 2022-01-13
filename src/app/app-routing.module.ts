import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: 'favs', component:FavoritesComponent},
{path: '', component:HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
