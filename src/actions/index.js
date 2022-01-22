import axios from 'axios';

const API_KEY = '18b0bbcd6e7876d1748518e2ff033587';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}?appid=${API_KEY}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  return {
 type: FETCH_WEATHER,
 payload: request

};
}
