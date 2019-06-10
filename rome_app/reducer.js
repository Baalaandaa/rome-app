export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAIL = 'GET_WEATHER_FAIL';
export const GET_NUMBER = 'GET_NUMBER';
export const GET_NUMBER_SUCCESS = 'GET_NUMBER_SUCCESS';
export const GET_NUMBER_FAIL = 'GET_NUMBER_FAIL';
export const NUMBER_CHANGED = 'NUMBER_CHANGED';

const defaultState = {
    weather_loading: false,
    weather_data: {},
    weather_error: false,
    numbers_loading: false,
    number: "",
    number_rome: "",
    number_error: false
};

export default function reducer(state = defaultState, action){
    switch (action.type){
        case GET_WEATHER:
            return { ...state, weather_loading: true};
        case GET_WEATHER_SUCCESS:
            return { ...state, weather_loading: false, weather_data: action.payload, weather_error: false};
        case GET_WEATHER_FAIL:
            return { ...state, weather_loading: false, weather_error: true};
        case GET_NUMBER:
            return { ...state, numbers_loading: true};
        case GET_NUMBER_SUCCESS: 
            return { ...state, numbers_loading: false, number: action.payload, number_error: false};
        case GET_NUMBER_FAIL:
            return { ...state, numbers_loading: false, number_error: true};
        case NUMBER_CHANGED:
            return { ...state, number_rome: action.payload}
    }
}