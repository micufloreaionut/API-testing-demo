import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { addPetBody } from '../../requestBodies/petTestData.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import { addPetJsonSchema } from '../../jsonSchemas/jsonSchemas.js';

let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Add a new pet endpoint tests',
    functionName: 'addNewPet',
    method: 'post',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}`,
    scenarios: [
        {
            testName: 'Add a new available pet - success',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                
            },
            body: (()=>{
                let body = addPetBody;
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
            jsonSchema: addPetJsonSchema
        },
        {
           testName: 'Add new pending pet - success',
           status: 200,
           urlParameters: {
              
           },
           queryParameters: {
              
           },
           body: (()=>{
                let body = addPetBody;
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
           jsonSchema: addPetJsonSchema
        },
        {
           testName: 'Add new sold pet - success',
           status: 200,
           urlParameters: {
              
           },
           queryParameters: {
              
           },
           body: (()=>{
                let body = addPetBody;
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
           jsonSchema: addPetJsonSchema
        }
    ]
}))()