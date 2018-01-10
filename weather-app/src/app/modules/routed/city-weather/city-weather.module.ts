import { CityWeatherRoutingModule } from './city-weather.module.routing';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CityWeatherRoutingModule
    ],
    declarations: [
        CityWeatherComponent
    ],
    providers: []
})
export class CityWeatherModule {

}
