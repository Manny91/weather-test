import { CityWeather } from './../entities/city-weather';
import { cityWeatherReducer } from './city-weather.reducer';
import { CITY_WEATHER_ACTION_TYPES } from './../actions/city-weather.action';
import { Weather } from '../entities/weather';

describe('City Weather reducer', () => {

    describe('when we want to fetch a city weather ', () => {
        const state = {
            items: []
        };
        const action = {
            type: CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHING,
        };
        const cityWeather = new CityWeather({
            city: {
                id: 1,
                name: 'London',
                country: 'uk',
            },
            list: [
                new Weather({
                    dt_txt: '2018-01-12 00:00:00',
                    temp: '290'
                }),
                new Weather({
                    dt_txt: '2018-01-12 06:00:00',
                    temp: '290'
                }),
                new Weather({
                    dt_txt: '2018-01-12 12:00:00',
                    temp: '290'
                }),
                new Weather({
                    dt_txt: '2018-01-12 18:00:00',
                    temp: '290'
                })
            ]
        });
        const citiesWeatherItems = [cityWeather];
        const fetchedAction = {
            type: CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHED,
            payload: {
                item: cityWeather
        }};

        it('should add an item when it doesnt exist already', () => {
            const reducerFetchedACityWeather = cityWeatherReducer(state, fetchedAction);
            expect(reducerFetchedACityWeather.items).toEqual(citiesWeatherItems);
        });


        it('should not add an item if it exists already', () => {
            const populatedState =  {
                items: citiesWeatherItems
            };
            const reducerWithState = cityWeatherReducer(populatedState, fetchedAction);
            expect(reducerWithState.items).toEqual(citiesWeatherItems);
        });
    });


});
