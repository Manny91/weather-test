import { Weather } from './weather';

export class CityWeather {
    id: number;
    name: string;
    country: string;
    midnightTemperature: Weather;
    morningTemperature: Weather;
    afternoonTemperature: Weather;
    eveningTemperature: Weather;

    constructor(data: any = {}) {
        if (data.city) {
            this.id = data.city.id;
            this.name = data.city.name;
            this.country = data.city.country;
            this.midnightTemperature = this.getMidnightTemperature(data.list);
            this.morningTemperature = this.getMorningTemperature(data.list);
            this.afternoonTemperature = this.getAfternoonTemperature(data.list);
            this.eveningTemperature = this.getEveningTemperature(data.list);
        } else {
            throw new Error();
        }
    }

    public getMidnightTemperature = (arrayTemperatures) => {
        return  new Weather(arrayTemperatures.find((weather: Weather) => weather.dt_txt.indexOf('00:00') > 0));
    }

    public getMorningTemperature = (arrayTemperatures) => {
        return new Weather(arrayTemperatures.find((weather: Weather) => weather.dt_txt.indexOf('06:00') > 0));
    }

    public getAfternoonTemperature = (arrayTemperatures) => {
        return new Weather(arrayTemperatures.find((weather: Weather) => weather.dt_txt.indexOf('12:00') > 0));
    }

    public getEveningTemperature = (arrayTemperatures) => {
        return new Weather(arrayTemperatures.find((weather: Weather) => weather.dt_txt.indexOf('18:00') > 0));
    }



}
