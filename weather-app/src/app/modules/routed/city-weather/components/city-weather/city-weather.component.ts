import { CityWeatherState } from './../../state/city-weather.state';
import { CityWeather } from './../../entities/city-weather';
import { CityWeatherActions } from './../../actions/city-weather.action';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from './../../services/form-builder.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeatherForm } from '../../entities/city-weather-form';
import { CityWeatherService } from '../../services/city-weather.service';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'app-city-weather',
    templateUrl: './city-weather.component.html',
    styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent {

    public form: FormGroup;
    public citiesWeather: CityWeather[] = [];
    public toSearch$: Subject<string>;
    constructor (
        public formBuilderService: FormBuilderService,
        public cityWeatherActions: CityWeatherActions,
        public cityWeatherService: CityWeatherService,
        public store: Store<any>,
    ) {
        this.toSearch$ = new Subject();
        this.toSearch$.subscribe(this.cityWeatherSearch);
        this.form = formBuilderService.buildSearchCityWeatherForm();
        this.store.select('citiesWeather').subscribe(this.loadCities);
    }


    private loadCities = (cityWeatherState: CityWeatherState): void => {
        this.citiesWeather = cityWeatherState.items;
    }

    public cityWeatherSearch = (cityToSearch: string) => {

        this.store.dispatch(this.cityWeatherActions.cityWeatherFetching());
        this.cityWeatherService.getCityWeather({q: cityToSearch}).subscribe(this.cityWeatherFetched);
        this.form.reset();
    }

    public cityWeatherFetched = (data: any) => {
        const cityWeather = new CityWeather(data);
        console.log(cityWeather);
        this.store.dispatch(this.cityWeatherActions.cityWeatherFetched(cityWeather));
    }

}
