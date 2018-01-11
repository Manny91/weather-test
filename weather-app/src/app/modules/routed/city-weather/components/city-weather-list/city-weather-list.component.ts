import { CityWeather } from './../../entities/city-weather';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-city-weather-list',
    templateUrl: './city-weather-list.component.html',
    styleUrls: ['./city-weather-list.component.scss']
})
export class CityWeatherListComponent {
    @Input() citiesWeather: CityWeather[];
}
