import ResponseAssertions from "../responses/ResponseAssertions";

class ErrorRequests {

    BadRequest400(APIKey) {

        cy.request({ url: `https://api.openweathermap.org/data/2.5/weather?la=57&lon=-2.15&appid=${APIKey}`, failOnStatusCode: false })
            .then((response) => {
                ResponseAssertions.verifyResponseStatusCode(response.status, 400);

            })
    }

    UnauthorizedRequest401(APIKey) {

        cy.request({ url: `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${APIKey}`, failOnStatusCode: false })
            .then((response) => {
                ResponseAssertions.verifyResponseStatusCode(response.status, 401);

            })
    }

    NotFoundRequest404(APIKey) {


        cy.request({ url: `https://api.openweathermap.org/data/3.5/weather?lat=57&lon=-2.15&appid=${APIKey}`, failOnStatusCode: false })
            .then((response) => {
                ResponseAssertions.verifyResponseStatusCode(response.status, 404);

            })
    }

    NotImplemented501() {

        cy.intercept('GET', 'https://home.openweathermap.org/pricing', {
            statusCode: 501,

        }).as('mockStatusTo501');

        cy.visit('https://openweathermap.org/current');

        cy.wait("@mockStatusTo501")
            .then((response) => {
                console.log("Aqui: " + response.response.statusCode)
                ResponseAssertions.verifyResponseStatusCode(response.response.statusCode, 501);

            })
    }



}

export default new ErrorRequests();