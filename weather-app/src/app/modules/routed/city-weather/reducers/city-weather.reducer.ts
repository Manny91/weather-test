import { CityWeather } from './../entities/city-weather';
import { CITY_WEATHER_ACTION_TYPES } from './../actions/city-weather.action';
import { CityWeatherState } from '../state/city-weather.state';


/**
 * City Weather Reducer
 * @param state
 * @param action
 */
export function cityWeatherReducer(state: CityWeatherState, action: any): CityWeatherState {

    switch (action.type) {
        case CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHING:
            return state;
        case CITY_WEATHER_ACTION_TYPES.CITY_WEATHER_FETCHED:
            const actionCityWeather = action.payload.item;
            const alreadyExist = state.items.find((cityWeather: CityWeather) => cityWeather.id === actionCityWeather.id);
            if (alreadyExist) {
                return state;
            }
            return Object.assign({}, state, {
                items: [...state.items, action.payload.item]
            });
        default:
            return state;
    }
}
