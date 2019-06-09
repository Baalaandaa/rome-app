import { response } from "express";
import fetch from "node-fetch";

interface IAPIResponse {
    location: any;
    current: any;
}

class Weather {

    public static create(resp: IAPIResponse) {
        return {
            condition: resp.current.condition.text,
            feelslike: resp.current.feelslike_c,
            humidity: resp.current.humidity,
            temp: resp.current.temp_c
        };
    }
    public temp: number;
    public humidity: number;
    public feelslike: number;
    public condition: string;

}

function getWeather(): Promise<Weather> {
    return fetch("http://api.apixu.com/v1/current.json?key=d7fc1af911024b609f0105241190906&q=Rome")
        .then((resp) => {
          return resp.json() as Promise<IAPIResponse>;
        }).then((resp) => {
            return Weather.create(resp);
        });
}

export default getWeather;
