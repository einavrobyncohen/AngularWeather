import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/models/forecast.model';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  @Input() forecasts: ForecastModel[]
  @Input() name: string
  liked: boolean =  false

  constructor() { }

  ngOnInit(): void {
  }

  

}
