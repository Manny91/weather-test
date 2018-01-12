export class Weather {
    dt_txt: string;
    temp: string;

    constructor(data: any = {}) {
        this.dt_txt = data.dt_txt;
        this.temp = data.main ? this.tempInCelsius(data.main.temp) : null;
    }

    public tempInCelsius = (temp: number): string => {
        let tempInCelsius = null;
        if (this.temp !== null) {
            tempInCelsius = this.kelvinToCelsius(temp);
        }
        return tempInCelsius;
    }

    private kelvinToCelsius = (kelvin: number): string => {
        return Math.round(kelvin - 273.15) + ' C';
    }
}
