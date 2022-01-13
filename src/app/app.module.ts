import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { WeatherListComponent } from './cmps/weather-list/weather-list.component';
import { WeatherPreviewComponent } from './cmps/weather-preview/weather-preview.component';
import { WeatherFilterComponent } from './cmps/weather-filter/weather-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesComponent,
    AppHeaderComponent,
    WeatherListComponent,
    WeatherPreviewComponent,
    WeatherFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
