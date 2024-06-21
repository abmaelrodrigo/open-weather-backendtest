/// <reference types="cypress" />

import GetByLatAndLon from "../requests/GetByLatAndLon";
import apiData from "../../fixtures/apiData.json";
import GetByCity from "../requests/GetByCity";
import GetByDifferentUnits from "../requests/GetByDifferentUnits";
import ErrorRequests from "../requests/ErrorRequests";


context('Current weather data by latitude and longitude', () => {

    it('Verify user can access weather data by latitude and longitude', () => {
        GetByLatAndLon.requestWeather(apiData.lat, apiData.lon, apiData.APIKey);

    })

});

context('Current weather data by city ', () => {

    it('Verify user can get weather data by city name', () => {
        GetByCity.requestWeatherByName(apiData.city.name, apiData.APIKey);

    })

    it('Verify user can get weather data by city ID', () => {
        GetByCity.requestWeatherByID(apiData.city.id,apiData.city.country,apiData.APIKey);

    })

    it('Verify user can get weather data by city Zip Code', () => {
        GetByCity.requestWeatherByZipCode(apiData.city.zip, apiData.city.country,apiData.APIKey);

    })

});

context('Current weather with different units of measurement', () => {

    it('Verify user can get the weather data on the Celsius unit', () => {
        GetByDifferentUnits.requestWeatherByUnit(apiData.city.name, apiData.APIKey, "metric");

    })

    it('Verify user can get the weather data on the Fahrenheit unit', () => {
        GetByDifferentUnits.requestWeatherByUnit(apiData.city.name, apiData.APIKey, "imperial");

    })

});

context('Error requests', () => {

    it('Verify user obtain Bad Request 400 by sending incorrect Geocode parameter on the URL', () => {
        ErrorRequests.BadRequest400(apiData.APIKey);

    })

    it('Verify user obtain Unauthorized Request 401 by sending incorrect API Key on the URL', () => {
        ErrorRequests.UnauthorizedRequest401(100);

    })

    it('Verify user obtain  Not Found Request 404 by sending an invalid city name', () => {
        ErrorRequests.NotFoundRequest404(apiData.city.name,apiData.APIKey);

    })

    it('Verify user obtain Not Implemented 501 by mocking an API call status', () => {
        ErrorRequests.NotImplemented501();

    })

    
});



