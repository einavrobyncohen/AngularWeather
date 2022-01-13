import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY: string = '3qWZ7Oc8hIdrN5ZQHBCb6ff8emfaEXpx'

  constructor(private http: HttpClient) { }

    getCitiesFromSearch(term: string) {
      return this.http.get<any>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${term}`)
    }

    getFiveDaysForecats(countryCode: string | number) {
      return this.http.get<object>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${countryCode}?apikey=${this.API_KEY}`)
    }

    saveLocation(location) {
      
    }






}
