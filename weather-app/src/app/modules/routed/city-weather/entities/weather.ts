export class Weather {
    dt_txt: string;
    temp: number;

    constructor(data: any = {}) {
        this.dt_txt = data.dt_txt;
        this.temp = data.main ? this.tempInCelsius(data.main.temp) : null;
    }

    public tempInCelsius = (temp: number): number => {
        let tempInCelsius = null;
        if (this.temp !== null) {
            tempInCelsius = this.kelvinToCelsius(temp);
        }
        return tempInCelsius;
    }

    private kelvinToCelsius = (kelvin: number): number => {
        return Math.round(kelvin - 273.15);
    }
}
