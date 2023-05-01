import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
chai.use(chaiJsonSchema);
import { uploadPetImage, addPet, updatePet, findPetByStatus, findPetByID, updatePetWithFormData, deletePet } from '../../functions/endpoints/petEndpoints.js';
import { loginUser } from '../../functions/endpoints/usersEndpoints.js';
import { authData } from '../../data/apis/authData.js';
import { addPetBody, updatePetBody } from '../../data/tests/petTestData.js';
import { header } from '../../data/apis/petAPIData.js';
import * as jsonSchemas from '../../data/jsonSchemas/jsonSchemas.js';

let headers;
let api_key;
let petId;
let testCases = {
    "uploadPetImage": [
        ["Upload pet image 1", "0" ,"header", "name", "file", "data/files/dog.jpg", 200, jsonSchemas.uploadImageJsonSchema],
        ["Upload pet image 1 with no pet id", "" ,"header", "name", "file", "data/files/dog.jpg", 404],
        ["Upload pet image 1 with no auth token", "0", {"Accept": "application/json"}, "name", "file", "data/files/dog.jpg", 401],
    ],
    "addPet": [
        ["Add available pet", addPetBody, "header", 200, "available", jsonSchemas.addPetJsonSchema],
        ["Add pending pet", addPetBody, "header", 200, "pending", jsonSchemas.addPetJsonSchema],
        ["Add sold pet", addPetBody, "header", 200, "sold", jsonSchemas.addPetJsonSchema],
    ],
    "updatePet": [
        ["Update available pet", updatePetBody, "header", 200, "available", jsonSchemas.updatePetJsonSchema],
        ["Update pending pet", updatePetBody, "header", 200, "pending", jsonSchemas.updatePetJsonSchema],
        ["Update sold pet", updatePetBody, "header", 200, "sold", jsonSchemas.updatePetJsonSchema]
    ],
    "findPetByStatus": [
        ["Find available pet by status", "available", "header", 200, jsonSchemas.findPetByStatusJsonSchema],
        ["Find pending pet by status", "pending", "header", 200, jsonSchemas.findPetByStatusJsonSchema],
        ["Find sold pet by status", "sold", "header", 200, jsonSchemas.findPetByStatusJsonSchema]
    ],
    "findPetByID": [
        ["Find pet by id", "petId", "header", 200, jsonSchemas.findPetByIdJsonSchema],
        ["Find pet by id with no pet id", "", "header", 405]
    ],
    "updatePetByFormData": [
        ["Update pet by form data", "petId", "name", "newDoggie", "header", 200, jsonSchemas.updatePetByFormDataJsonSchema],
        ["Update pet by form datawith no pet id", "", "name", "newDoggie", "header", 415],
    ],
    "deletePet": [
        ["Delete pet by id", "petId", "header", 200, jsonSchemas.deletePetJsonSchema],
        ["Delete deleted pet by id", "petId", "header", 404]
    ]
}

describe("Test Pet endpoints", function () {
    this.retries(2);
    before(async function () {
        let log = await loginUser(authData.username, authData.password, header, 200);
        api_key = log.message.split(":").pop();      
        headers = { ...header, ...{ "api_key": api_key } };
    })

    describe("Upload Pet Images tests", function () {
        let headerWithFile = { ...headers, ...{ "Content-Type": "multipart/form-data" } }
        testCases.uploadPetImage.forEach(function (data) {
            it(data[0], async function () {
                let response = await uploadPetImage(data[1], data[2] == "header" ? headerWithFile : data[2], data[3], data[4], data[5], data[6]);
                if(data[7] != undefined){
                    chai.assert.jsonSchema(response.body, data[7])
                }
            })
        })
    })

    describe("Add New Pet tests", function () {
        testCases.addPet.forEach(function (data) {
            it(data[0], async function () {
                let body = data[1];
                body.status = data[4];
                body.photoUrls = ["./dog.jpg"];    
                let response = await addPet( body, data[2] == "header" ? headers : data[2], data[3]);
                if(data[4] == "available" && response.statusCode == 200) {
                    petId = response.body.id;
                }
                if(data[5] != undefined){
                    chai.assert.jsonSchema(response.body, data[5])
                }
            })
        })
    })

    describe("Update Pet tests", function () {
        testCases.updatePet.forEach(function (data) {
            it(data[0], async function () {
                let body = data[1];
                body.status = data[4];
                body.photoUrls = ["./dog.jpg"];
                let response = await updatePet( body, data[2] == "header" ? headers : data[2], data[3]);
                if(data[5] != undefined){
                    chai.assert.jsonSchema(response.body, data[5])
                }
            })
        })
    })

    describe("Find Pet by Status tests", function () {
        testCases.findPetByStatus.forEach(function (data) {
            it(data[0], async function () {
                let response = await findPetByStatus(`?status=${data[1]}`, data[2] == "header" ? headers : data[2], data[3]);
                if(data[4] != undefined){
                    chai.assert.jsonSchema(response.body, data[4])
                }
            })
        })
    })

    describe("Find Pet by Id tests", function () {
        testCases.findPetByID.forEach(function (data) {
            it(data[0], async function () {
                let response = await findPetByID(data[1] == "petId" ? petId : data[1], data[2] == "header"? headers : data[2], data[3]);
                if(data[4] != undefined){
                    chai.assert.jsonSchema(response.body, data[4])
                }
            })     
        })
    })

    describe("Update Pet by Form Data tests", function () {
        let headerWithFormData = { ...headers, ...{ "Content-Type": "application/x-www-form-urlencoded" } };
        testCases.updatePetByFormData.forEach(function (data) {
            let formData = {[data[2]]: data[3]};
            it(data[0], async function () {
                let response = await updatePetWithFormData(data[1] == "petId" ? petId : data[1], formData, data[4] == "header"? headerWithFormData : data[4], data[5]);
                if(data[6] != undefined){
                    chai.assert.jsonSchema(response.body, data[6])
                }
            })
        })
    })

    describe("Delete Pet tests", function () {
        testCases.deletePet.forEach(function (data) {
            it(data[0], async function () {
                let response = await deletePet(data[1] == "petId" ? petId : data[1], data[2] == "header" ? headers : data[2], data[3]);
                if(data[4] != undefined){
                    chai.assert.jsonSchema(response.body, data[4])
                }
            })
        })
    })
})