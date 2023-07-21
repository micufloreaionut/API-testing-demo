import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { findPetByStatusJsonSchema } from '../../jsonSchemas/jsonSchemas.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Find pet by status endpoint tests',
    functionName: 'findPetByStatus',
    method: 'get',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}${petEndpoints.findByStatus}`,
    scenarios: [
        {
            testName: 'Find available pet by status - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                status: 'available'
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
            jsonSchema: findPetByStatusJsonSchema
        },
        {
            testName: 'Find pending pet by status - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                status: 'pending'
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
            jsonSchema: findPetByStatusJsonSchema
        },
        {
            testName: 'Find sold pet by status - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                status: 'sold'
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
            jsonSchema: findPetByStatusJsonSchema
        }
    ]
}))()