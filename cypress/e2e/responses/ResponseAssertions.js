
class ResponseAssertion {

    verifyBodyMessage(response, expectedMessage){
        expect(response.body.message).to.eq(expectedMessage);
    }

    verifyResponseStatusCode(response, expected) {

        expect(response).to.eq(expected);

    }

    verifyResponseStructure(response) {

        expect(response.body).to.have.property("coord");
        expect(response.body).to.have.property("weather");
        expect(response.body).to.have.property("base");
        expect(response.body).to.have.property("main");
        expect(response.body).to.have.property("visibility");
        expect(response.body).to.have.property("wind");
        expect(response.body).to.have.property("clouds");
        expect(response.body).to.have.property("dt");
        expect(response.body).to.have.property("sys");
        expect(response.body).to.have.property("timezone");
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("name");
        expect(response.body).to.have.property("cod");
        
        

    }


}

export default new ResponseAssertion();