import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import { updatePetJsonSchema } from '../../jsonSchemas/jsonSchemas.js';
import { updatePetBody } from '../../requestBodies/petTestData.js'
let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Update pet endpoint tests',
    functionName: 'updatePet',
    method: 'put',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}`,
    scenarios: [
        {
            testName: 'Update available pet - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: (()=>{
                let body = updatePetBody;
                body.photoUrls = ["./dog.jpg"]; 
                body.status = "available";
                return body;
            })(),
            formData: {
                
            },
            file: {
                fieldName: '',
                fieldNameValue: '',
                filePath: ''
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: updatePetJsonSchema
        },
        {
            testName: 'Update pending pet - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: (()=>{
                let body = updatePetBody;
                body.photoUrls = ["./dog.jpg"]; 
                body.status = "pending";
                return body;
            })(),
            formData: {
                
            },
            file: {
                fieldName: '',
                fieldNameValue: '',
                filePath: ''
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: updatePetJsonSchema
        },
        {
            testName: 'Update sold pet - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: (()=>{
                let body = updatePetBody;
                body.photoUrls = ["./dog.jpg"]; 
                body.status = "sold";
                return body;
            })(),
            formData: {
                
            },
            file: {
                fieldName: '',
                fieldNameValue: '',
                filePath: ''
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: updatePetJsonSchema
        }
    ]
}))()