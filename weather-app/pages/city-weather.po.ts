import { browser, by, element } from 'protractor';

export class CityWeatherPage {
    navigateTo() {
        return browser.get('/');
    }

    searchCity(cityName: string) {
        element(by.css('.city-weather-input')).sendKeys(cityName);
        element(by.css('.city-weather-search')).click();
    }

    getCityNamesList() {
        return element.all(by.css('.city-name')).map(e => e.getText());
    }
}
