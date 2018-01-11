import { CityWeather } from '../entities/city-weather';

export class CityWeatherState {
    public items: CityWeather[];

    constructor(data: any = {}) {
        this.items = data.items || [];
    }

}
