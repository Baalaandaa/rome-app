"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class Weather {
    static create(resp) {
        return {
            condition: resp.current.condition.text,
            feelslike: resp.current.feelslike_c,
            humidity: resp.current.humidity,
            temp: resp.current.temp_c
        };
    }
}
function getWeather() {
    return node_fetch_1.default("http://api.apixu.com/v1/current.json?key=d7fc1af911024b609f0105241190906&q=Rome")
        .then((resp) => {
        return resp.json();
    }).then((resp) => {
        return Weather.create(resp);
    });
}
exports.default = getWeather;
//# sourceMappingURL=weather.js.map