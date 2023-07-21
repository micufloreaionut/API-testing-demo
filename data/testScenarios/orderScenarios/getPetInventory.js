import TestTemplate from '../../../functions/utils.js';
import * as environments from '../../../configs/envs.js';
import { orderEndpoints } from '../../../data/apis/orderAPIData.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';

let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Check pet inventory endpoint tests',
    functionName: 'getPetInventory',
    method: 'get',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${orderEndpoints.inventory}`,
    scenarios: [
        {
            testName: 'Get Pet inventory - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: {
                
            },
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