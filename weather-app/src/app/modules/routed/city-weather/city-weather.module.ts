import { StoreModule } from '@ngrx/store';
import { CityWeatherRoutingModule } from './city-weather.module.routing';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { NgModule } from '@angular/core';
import { FormBuilderService } from './services/form-builder.service';
import { CityWeatherService } from './services/city-weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityWeatherActions } from './actions/city-weather.action';
import { HttpClientModule } from '@angular/common/http';
import { cityWeatherReducer } from './reducers/city-weather.reducer';
import { CommonModule } from '@angular/common';
import { CityWeatherListComponent } from './components/city-weather-list/city-weather-list.component';
import { CityWeatherListItemComponent } from './components/city-weather-list-item/city-list-item.component';

@NgModule({
    imports: [
        CityWeatherRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forRoot({
            citiesWeather: cityWeatherReducer
        }, {initialState: {
            citiesWeather: {
                items: []
            }
        }})
    ],
    declarations: [
        CityWeatherComponent,
        CityWeatherListComponent,
        CityWeatherListItemComponent
    ],
    providers: [
        FormBuilderService,
        CityWeatherService,
        CityWeatherActions
    ]
})
export class CityWeatherModule {

}
