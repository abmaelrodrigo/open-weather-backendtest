import ResponseAssertions from "../responses/ResponseAssertions";
let expectedResponse = 200;

class GetByDifferentUnits {

    verifyTemperatureUnit(temp, highestTemp){
        // To verify we simple check that it is less then 60 degress / 140 degress Fahrenheit
        // The highest temperature on Earth was 58 degress Celsius / 136,4 degress Fahrenheit
        expect(temp).to.be.lessThan(highestTemp);
          
    }


    requestWeatherByUnit(cityName, APIKey, unit) {

        cy.request(`/weather?q=${cityName}&appid=${APIKey}&units=${unit}`)
            .then((response) => {
                let temp = response.body.main.temp;
                let highestTemp = 60;

                if(unit == "imperial" ) {
                    highestTemp = highestTemp * (9 / 5) + 32;

                }

                this.verifyTemperatureUnit(temp, highestTemp);

                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                
               
                ResponseAssertions.verifyResponseStructure(response);
            })

    }
    
}



export default new GetByDifferentUnits();