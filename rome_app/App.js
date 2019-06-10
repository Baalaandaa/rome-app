import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Button, ActivityIndicator, Text, View} from 'react-native';
import {GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL, GET_NUMBER, GET_NUMBER_FAIL, GET_NUMBER_SUCCESS, NUMBER_CHANGED} from './reducer'
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount(){
    this.updateWeather();
  }

  updateWeather = () => {
    this.props.getWeather();
    fetch("http://192.168.1.157:8080/weather").then(async (result) => {
      if(result.status !== 200 && result.status !== 304){
        //Something went wrong;
        console.warn("request failed");
        this.props.getWeatherFail();
        return ;
      }
      var data = await result.json();
      this.props.getWeatherSuccess(data);
    });
  }

  updateNumbers = () => {
    console.log(`http://192.168.1.157:8080/arabic?number=${this.props.numbers.number_rome}`);
    this.props.getNumber();
    fetch(`http://192.168.1.157:8080/arabic?number=${this.props.numbers.number_rome}`).then(async (result) => {
      if(result.status !== 200 && result.status !== 304){
        //Something went wrong;
        console.warn("request failed");
        this.props.getNumberFail();
        return ;
      }
      var data = await result.json();
      this.props.getNumberSuccess(data);
    });
  }

  renderWeather = () => {
    if(this.props.weather == undefined) return (
      <Text>Loading...</Text>
    );
    if(this.props.weather.loading){
      return (
        <ActivityIndicator size="large" color="#0000ff" />
      );
    }
    if(!this.props.weather.error){
      return (
        <View style={{height: 250, color: '#ddd'}}>
        <Text>{(this.props.weather.data.temp) ? this.props.weather.data.temp: '-'}ºC</Text>
        <Text>Влажность:{(this.props.weather.data.humidity) ? this.props.weather.data.humidity: '-'}%</Text>
        <Text>{(this.props.weather.data.feelslike) ? this.props.weather.data.feelslike: '-'}ºC</Text>
        <Text>{(this.props.weather.data.condition) ? this.props.weather.data.condition: ' '}</Text>
        <Button onPress={this.updateWeather} title="Обновить" />
        </View>
      );
    }
    return (
      <Text>Что-то пошло не так &shrug;</Text>
    );
  }

  renderNumbers = () => {
    if(this.props.numbers == undefined) return (
      <Text>Loading...</Text>
    );
    if(this.props.numbers.loading){
      return (
        <ActivityIndicator size="large" color="#0000ff" />
      );
    }
    if(this.props.numbers.error){
      return (
        <Text>Что-то пошло не так &shrug;</Text>
      );
    }
    return (
      <Text>{this.props.numbers.number}</Text>
    )
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Write roman number here" onChangeText={this.props.numberChanged} value={this.props.numbers ? this.props.numbers.number_rome : ""} />
        <Button onPress={this.updateNumbers} title="Перевести в арабские"></Button>
        {this.renderNumbers()}
        {this.renderWeather()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  if(state == undefined) return {};
  return {
    weather: {
      error: state.weather_error,
      loading: state.weather_loading,
      data: state.weather_data
    },
    numbers: {
      error: state.number_error,
      loading: state.numbers_loading,
      number: state.number,
      number_rome: state.number_rome
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => {
      dispatch({type: GET_WEATHER});
    },
    getWeatherSuccess: (data) => {
      dispatch({type: GET_WEATHER_SUCCESS, payload: data});
    },
    getWeatherFail: () => {
      dispatch({type: GET_WEATHER_FAIL});
    },
    getNumber: () => {
      dispatch({type: GET_NUMBER});
    },
    getNumberSuccess: (data) => {
      dispatch({type: GET_NUMBER_SUCCESS, payload: data});
    },
    getNumberFail: () => {
      dispatch({type: GET_NUMBER_FAIL});
    },
    numberChanged: (data) => {
      dispatch({type: NUMBER_CHANGED, payload: data});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);