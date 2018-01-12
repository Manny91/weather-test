import { AppPage } from '../pages/app.po';
import { CityWeatherPage } from '../pages/city-weather.po';

describe('weather-app App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('24 hours weather forecast');
    });
});


describe('Weather app search', () => {
    let page: CityWeatherPage;

    beforeEach(() => {
        page = new CityWeatherPage();
    });


    it('should add in the list a city when searching for it', () => {
        page.navigateTo();
        const cityToSearch = 'London';
        page.searchCity(cityToSearch);
        expect(page.getCityNamesList()).toEqual([cityToSearch]);
    });

    it('should add in the list a city when searching for it', () => {
        page.navigateTo();
        const citiesToSearch = ['London', 'Madrid'];
        page.searchCity(citiesToSearch[0]);
        expect(page.getCityNamesList()).toEqual([citiesToSearch[0]]);
        page.searchCity(citiesToSearch[1]);
        expect(page.getCityNamesList()).toEqual(citiesToSearch);
    });
});
