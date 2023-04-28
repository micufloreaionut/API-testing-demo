import { expect as test } from 'chai';
import { getRequest } from '../requests.js';
import { authData } from '../../data/apis/authData.js';
import * as environments from '../../configs/envs.js';
let env = environments[process.env.ENV];

export async function loginUser(...arg) {
    const res = await getRequest(
        env.petStore,
        authData.login + 
        `?username=${arg[0]}&password=${arg[1]}`,
        arg[2]
    )
    test(res.statusCode).to.equal(arg[3]);
    return await res.body;
}