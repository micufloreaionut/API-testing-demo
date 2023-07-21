import getAuth from '../../data/testScenarios/authscenarios/auth.js';
import { header } from '../../data/apis/authData.js';

export async function getHeadersWithAuthToken(){
    let testData  = await getAuth;
    let res = await testData.exportPositiveScenario();
    let api_key = res.message.split(":").pop();      
    let headers = { ...header, ...{ "api_key": api_key } };
    return headers;
}