
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

const routes = [
    {
        path: '',
        component: CityWeatherComponent,
        data: {
            name: 'City Weather Forecast'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CityWeatherRoutingModule {}
