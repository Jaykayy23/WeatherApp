import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = params=> 'https://api.weatherapi.com/v1/forecast.json?key=54cf6da09fbd464194e12348232808&q=London&days=1&aqi=no&alerts=no'