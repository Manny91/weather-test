import { RouterModule } from '@angular/router';
import { CityWeatherModule } from './modules/routed/city-weather/city-weather.module';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        CityWeatherModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
