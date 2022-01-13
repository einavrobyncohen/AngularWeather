import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/models/forecast.model';

@Component({
  selector: 'weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.scss']
})
export class WeatherPreviewComponent implements OnInit {

  @Input() forecast: ForecastModel
  constructor() { }

  ngOnInit(): void {
    console.log(this.forecast)
  }

}
