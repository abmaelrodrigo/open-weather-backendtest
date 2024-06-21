import ResponseAssertions from "../responses/ResponseAssertions";
let expectedResponse = 200;

class GetByCity{

    verifyCityName(cityName, response){
        expect(response.body.name.toLowerCase()).to.be.eq(cityName.toLowerCase());
    }

    verifyCityId(cityID, response){
        expect(response.body.id).to.be.eq(cityID);
    }

    verifyCityCountry(cityCountry, response){
        expect(response.body.sys.country).to.be.eq(cityCountry);
    }


    requestWeatherByZipCode(cityZipCode, cityCountry, APIKey) {

        cy.request(`/weather?zip=${cityZipCode},${cityCountry.toLowerCase()}&appid=${APIKey}`)
            .then((response) => {
                
                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                
                this.verifyCityCountry(cityCountry, response);

                ResponseAssertions.verifyResponseStructure(response);
            })

    }

    requestWeatherByID(cityID, cityCountry, APIKey) {

        cy.request(`/weather?id=${cityID}&appid=${APIKey}`)
            .then((response) => {
                
                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                
                this.verifyCityId(cityID, response);

                this.verifyCityCountry(cityCountry, response);

                ResponseAssertions.verifyResponseStructure(response);
            })

    }

    requestWeatherByName(cityName, APIKey) {

        cy.request(`/weather?q=${cityName}&appid=${APIKey}`)
            .then((response) => {
                
                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                
                this.verifyCityName(cityName, response);

                ResponseAssertions.verifyResponseStructure(response);
            })

    }

}

export default new GetByCity();