import ResponseAssertions from "../responses/ResponseAssertions";

class GetByCityName{

    verifyCityName(cityName, response){
        expect(response.body.name.toLowerCase()).to.be.eq(cityName.toLowerCase());
    }

    requestWeather(cityName, APIKey) {

        cy.request(`/weather?q=${cityName}&appid=${APIKey}`)
            .then((response) => {
                ResponseAssertions.verifyResponseStatusIs200(response);
                
                this.verifyCityName(cityName, response);

                ResponseAssertions.verifyResponseStructure(response);
            })

    }

}

export default new GetByCityName();