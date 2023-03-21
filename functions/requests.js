const request = require('supertest');
const Ajv = require("ajv")

async function postRequest(...arg){
    return request.agent(arg[0])//URL
        .post(arg[1])//API
        .send(arg[2])//BODY
        .set(arg[3])//HEADER
        .then(function (res){
            return res;//RESPONSE
        })
        .catch(function (err){
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function postWithFile(...arg) {
    return request.agent(arg[0])//URL
        .post(arg[1]) //API
        .set(arg[2])//HEADER
        .field(arg[3], arg[4])
        .attach(arg[5], arg[6])
        .then(function (res) {
            return res;//RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function putWithFile(...arg) {
    return request.agent(arg[0])//URL
        .put(arg[1]) //API
        .set(arg[2])//HEADER
        .field(arg[3], arg[4])
        .attach(arg[5], arg[6])
        .then(function (res) {
            return res;//RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function getRequest(...arg){
    return request.agent(arg[0])//URL
        .get(arg[1])//API
        .set(arg[2])//HEADERS
        .then(function (res){
            return res;//RESPONSE
        })
        .catch(function (err){
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function deleteRequest(...arg) {
    return request.agent(arg[0])                  //URL
        .del(arg[1])                              //API
        .set(arg[2])                              //HEADER
        .then(function (res) {
            return res;                           //RETURNS RESPONSE
        })
        .catch(function (err) {
            console.error(err.response);
            return Promise.reject(err);
        });
}

async function putRequest(...arg) {
    return request.agent(arg[0])                  //URL
        .put(arg[1])                              //API
        .send(arg[2])                             //BODY
        .set(arg[3])                              //HEADER
        .then(function (res) {
            return res;                           //RETURNS RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function patchRequest(...arg) {
    return request.agent(arg[0])                  //URL
        .patch(arg[1])                              //API
        .send(arg[2])                             //BODY
        .set(arg[3])                              //HEADER
        .then(function (res) {
            return res;                           //RETURNS RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

async function schemaValidation(schema, responseBody){
    const ajv = new Ajv()
    const validate = ajv.compile(schema)
    const valid = validate(responseBody)
    if (!valid) console.log(validate.errors)
    return valid
}

module.exports = {
    postRequest,
    getRequest,
    deleteRequest,
    putRequest,
    patchRequest,
    schemaValidation,
    postWithFile,
    putWithFile
};