const test = require('chai').expect;
const api = require('../requests.js');
const env = require('../../configs/env.js')[process.env.ENV];
const testFunctions = require('../../functions/petEndpoints.js');


describe("Test Pet endpoints", function () {

    before(async function () {

    })

    let testCases = {
        "pets": [
            []
        ]
    }

    describe("Upload Pet Images tests", function () {
        testCases.pets.forEach(function (data) {
            let response = await testFunctions.uploadPetImage(data);
            console.log(response);
        })
    })

})