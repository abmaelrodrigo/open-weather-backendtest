import ResponseAssertions from "../responses/ResponseAssertions";
let expectedResponse = 200;

class GetByCityName{

    verifyCityName(cityName, response){
        expect(response.body.name.toLowerCase()).to.be.eq(cityName.toLowerCase());
    }

    requestWeather(cityName, APIKey) {

        cy.request(`/weather?q=${cityName}&appid=${APIKey}`)
            .then((response) => {
                
                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                
                this.verifyCityName(cityName, response);

                ResponseAssertions.verifyResponseStructure(response);
            })

    }

}

export default new GetByCityName();