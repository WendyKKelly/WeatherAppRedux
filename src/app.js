import React, { Component } from 'react';

import SearchBar from './components/search_bar'
import WeatherList from './weather-list'

export default class App extends Component {
  render() {
    return (
      <div>
       <SearchBar />
       <WeatherList />
      </div>
    );
  }
}
