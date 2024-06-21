import ResponseAssertions from "../responses/ResponseAssertions";
let expectedResponse = 200;

class GetByLatAndLon {

   
   
    verifyCoordinates(lat, lon, response){
        expect(response.body.coord.lat).to.be.eq(parseFloat(lat));
        expect(response.body.coord.lon).to.be.eq(parseFloat(lon));

    }

    requestWeather(lat, lon, APIKey) {

        cy.request(`/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
            .then((response) => {
                ResponseAssertions.verifyResponseStatusCode(response.status, expectedResponse);
                this.verifyCoordinates(lat, lon, response);
                ResponseAssertions.verifyResponseStructure(response);
            })

    }


}

export default new GetByLatAndLon();