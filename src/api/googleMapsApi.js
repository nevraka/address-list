import axios from 'axios';

export const API_KEY = 'AIzaSyBIHWg56dGw3SWOMH-8k9_NPa_wyFVoPuo';

const googleMapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
});

export default googleMapsApi;
