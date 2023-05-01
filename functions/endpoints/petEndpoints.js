import { expect as test } from 'chai';
import { postWithFile, postRequest, putRequest, getRequest, postWithForm, deleteRequest } from '../requests.js';
import * as environments from '../../configs/envs.js';
import { petEndpoints } from '../../data/apis/petAPIData.js';

let env = environments[process.env.ENV];

export async function uploadPetImage(...arg) {
    const res = await postWithFile(
        env.petStore,
        petEndpoints.pet + "/" +
        arg[0] +                    //petId
        petEndpoints.uploadImage,
        arg[1],                     //header
        arg[2], arg[3],             //field name, field value
        arg[3], arg[4]              //field value, path to file
    )
    test(res.statusCode).to.equal(arg[5]);
    return res;
}

export async function addPet(...arg) {
    const res = await postRequest(
        env.petStore,
        petEndpoints.pet,
        arg[0],                     //body
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function updatePet(...arg) {
    const res = await putRequest(
        env.petStore,
        petEndpoints.pet,
        arg[0],                     //body
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function findPetByStatus(...arg) {
    const res = await getRequest(
        env.petStore,
        petEndpoints.pet +
        petEndpoints.findByStatus + 
        arg[0],                     //query
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function findPetByID(...arg) {
    const res = await getRequest(
        env.petStore,
        petEndpoints.pet + "/" +
        arg[0],                     //pet id
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function updatePetWithFormData(...arg) {
    const res = await postWithForm(
        env.petStore,
        petEndpoints.pet + "/" +
        arg[0],                     //pet id
        arg[1],                     //header
        arg[2]                     //form data
    )
    test(res.statusCode).to.equal(arg[3]);
    return res;
}

export async function deletePet(...arg) {
    const res = await deleteRequest(
        env.petStore,
        petEndpoints.pet + "/" +
        arg[0],                     //pet id
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}