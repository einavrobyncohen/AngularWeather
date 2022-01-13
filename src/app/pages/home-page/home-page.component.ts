import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/models/forecast.model';
import { LocationModel } from 'src/app/models/location.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  location: LocationModel
  forecast: ForecastModel[]
  locationName: string
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onFilter({Key, LocalizedName}) {

    this.weatherService.getFiveDaysForecats(Key).subscribe(forecast => {
      this.forecast = forecast['DailyForecasts']
      this.locationName = LocalizedName
      console.log(this.forecast)
    })
  }

}
