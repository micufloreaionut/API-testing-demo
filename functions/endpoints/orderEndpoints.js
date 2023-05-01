import { expect as test } from 'chai';
import { postRequest, getRequest, deleteRequest } from '../requests.js';
import * as environments from '../../configs/envs.js';
import { orderEndpoints } from '../../data/apis/orderAPIData.js';

let env = environments[process.env.ENV];

export async function addOrder(...arg) {
    const res = await postRequest(
        env.petStore,
        orderEndpoints.order,
        arg[0],                     //body
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function getPetInventory(...arg) {
    const res = await getRequest(
        env.petStore,
        orderEndpoints.inventory,
        arg[0]                      //header
    )
    test(res.statusCode).to.equal(arg[1]);
    return res;
}

export async function findOrderByID(...arg) {
    const res = await getRequest(
        env.petStore,
        orderEndpoints.order + "/" +
        arg[0],                     //order id
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}

export async function deleteOrder(...arg) {
    const res = await deleteRequest(
        env.petStore,
        orderEndpoints.order + "/" +
        arg[0],                     //order id
        arg[1]                      //header
    )
    test(res.statusCode).to.equal(arg[2]);
    return res;
}