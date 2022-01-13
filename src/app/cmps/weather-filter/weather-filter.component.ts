import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocationModel } from 'src/app/models/location.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-filter',
  templateUrl: './weather-filter.component.html',
  styleUrls: ['./weather-filter.component.scss']
})
export class WeatherFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter<LocationModel>()

  filterBy = {term: ''}
  location: LocationModel

  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
  }

  setFilter() {

    this.weatherService.getCitiesFromSearch(this.filterBy.term).subscribe(cities => {
      console.log(cities)
      this.location = cities[0]
      this.onFilter.emit(this.location)
    })

  }

}
