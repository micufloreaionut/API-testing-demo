import { agent } from 'supertest';

export async function postRequest(...arg){
    return agent(arg[0])//URL
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

export async function postWithForm(...arg) {
    return agent(arg[0])//URL
        .post(arg[1]) //API
        .type('form')
        .send(arg[2])//FORM
        .set(arg[3])//HEADER
        .then(function (res) {
            return res;//RESPONSE
        })
        .catch(function (err) {
            console.error(err.message);
            return Promise.reject(err);
        });
}

export async function postWithFile(...arg) {
    return agent(arg[0])//URL
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

export async function putWithFile(...arg) {
    return agent(arg[0])//URL
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

export async function getRequest(...arg){
    return agent(arg[0])//URL
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

export async function deleteRequest(...arg) {
    return agent(arg[0])                  //URL
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

export async function putRequest(...arg) {
    return agent(arg[0])                  //URL
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

export async function patchRequest(...arg) {
    return agent(arg[0])                  //URL
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