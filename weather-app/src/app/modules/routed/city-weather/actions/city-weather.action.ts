import { CityWeatherInterface } from './../entities/city-weather.interface';
import { Injectable } from '@angular/core';


export const CITY_WEATHER_ACTION_TYPES = {
  ACCOUNT_CITY_WEATHER_FETCHING: '[CITY_WEATHER] City weather fetching',
  ACCOUNT_CITY_WEATHER_FETCHED: '[CITY_WEATHER] City weather fetched'
};

@Injectable()
export class CityWeatherActions {

  /**
   * City weather creating
   */
  public cityWeatherFetching(): any {
    return {
      type: CITY_WEATHER_ACTION_TYPES.ACCOUNT_CITY_WEATHER_FETCHING,
      payload: null
    };
  }

  /**
   * Account contact created
   * @param cityWeather
   */
  public accountContactCreated(cityWeather: CityWeatherInterface): any {
    return {
      type: CITY_WEATHER_ACTION_TYPES.ACCOUNT_CITY_WEATHER_FETCHED,
      payload: {
        accountContact: cityWeather
      }
    };
  }
}
