/// <reference types="cypress" />

import  GetByLatAndLon from "../routes/GetByLatAndLon";
import apiData from "../../fixtures/apiData.json";
import GetByCityName from "../routes/GetByCityName";


context('Current weather data by latitude and longitude', ()=>{
  
    it('Verify user can access weather data by latitude and longitude', ()=> {
       GetByLatAndLon.requestWeather(apiData.lat, apiData.lon, apiData.APIKey);
    
    })
    
});

context('Current weather data by city name', ()=>{
  
    it.only('Verify user can access weather data by city name', ()=> {
       GetByCityName.requestWeather(apiData.cityName, apiData.APIKey);
    
    })
    
})


