import { CityWeather } from './../entities/city-weather';
import { Injectable } from '@angular/core';


export const CITY_WEATHER_ACTION_TYPES = {
    CITY_WEATHER_FETCHING: '[CITY_WEATHER] City weather fetching',
    CITY_WEATHER_FETCHED: '[CITY_WEATHER] City weather fetched'
};

@Injectable()
export class CityWeatherActions {

    /**
     * City weather creating
     */
    public cityWeatherFetching(): any {
        return {
            type: CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHING
        };
    }

    /**
     * Account contact created
     * @param cityWeather
     */
    public cityWeatherFetched(citiesWeather: CityWeather): any {
        return {
            type: CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHED,
            payload: {
                items: citiesWeather
            }
        };
    }
}
