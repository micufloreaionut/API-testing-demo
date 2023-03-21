const test = require('chai').expect;
const api = require('../requests.js');
const env = require('../../configs/env.js')[process.env.ENV];
const apiData = require('../../data/apis/petAPIData.js');

export async function uploadPetImage(...arg) {
    const res = await api.postWithFile(
        env.petstore,
        apiData.pet +
        arg[0] +                    //petId
        apiData.uploadPetImage,
        arg[1],                     //header
        arg[2], arg[3],             //field name, field value
        arg[3], arg[4]              //field value, path to file
    )
    test(await res.statusCode).to.equal(arg[5]);
    return await res.body;
}