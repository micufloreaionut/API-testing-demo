import TestTemplate from '../../../functions/utils.js';
import * as environments from '../../../configs/envs.js';
import { orderEndpoints } from '../../../data/apis/orderAPIData.js';
import { placeOrderBody } from '../../../data/requestBodies/orderTestData.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';

let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Add order endpoints tests',
    functionName: 'addOrder',
    method: 'post',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${orderEndpoints.order}`,
    scenarios: [
        {
            testName: 'Add order - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: placeOrderBody,
            formData: {
                
            },
            file: {
                fieldName: '',
                fieldNameValue: '',
                filePath: ''
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: {
                
            }
        }
    ]
}))()