import { Subject } from 'rxjs/Subject';
import { CityWeatherForm } from './../../entities/city-weather-form';
import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-city-weather-searcher',
    templateUrl: './city-weather-searcher.component.html',
    styleUrls: ['./city-weather-searcher.component.scss']
})
export class CityWeatherSearcherComponent {
    @Input() form: FormGroup;
    @Input() toSearch: Subject<string>;

    public search = () => {
        const cityWeatherQuery = new CityWeatherForm(this.form.value).query;
        if (cityWeatherQuery) {
            this.toSearch.next(cityWeatherQuery);
        }
    }
}
