import { CityWeather } from './../../entities/city-weather';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-city-weather-list-item',
    templateUrl: './city-weather-list-item.component.html',
    styleUrls: ['./city-weather-list-item.component.scss']
})
export class CityWeatherListItemComponent {
    @Input() cityWeather: CityWeather;
}
