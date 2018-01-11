import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityWeatherService {

    // custom app id for querying the weather API
    private WEATHER_APP_ID = 'c0f547cb9063fee1d5d5cd95a8ece1f9';
    private API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    constructor(private http: HttpClient) { }

    public getCityWeather = (filters: {}): Observable<any> => {
        Object.assign(filters, { appid: this.WEATHER_APP_ID });
        const url = this.convertFiltersToUrlParams(filters);
        return this.http.get(this.API_URL + url);
    }

    private convertFiltersToUrlParams = (params) => {
        return params ? '?' + Object.keys(params).map(
            (key) => ([key, params[key]].map(encodeURIComponent).join('='))).join('&') : '';
    }

}
