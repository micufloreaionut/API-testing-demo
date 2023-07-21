import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import * as environments from '../../../configs/envs.js';
import {uploadImageJsonSchema} from '../../jsonSchemas/jsonSchemas.js';

let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Upload Image Tests',
    functionName: 'uploadImage ',
    method: 'post',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}/${urlParameters.petId}${petEndpoints.uploadImage}`,
    scenarios: [
        {
            testName: 'Upload a pet image - success',
            status: 200,
            urlParameters: {
                petId: `1`
            },
            queryParameters: {
                
            },
            body: {
                
            },
            formData: {
                
            },
            file: {
                fieldName: 'name',
                fieldNameValue: 'file',
                filePath: 'data/files/dog.jpg'
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: uploadImageJsonSchema
        },
        {
           testName: 'Upload pet image with no pet Id',
           status: 404,
           urlParameters: {
              petId: ''
           },
           queryParameters: {
              
           },
           body: {
              
           },
           formData: {
              
           },
           file: {
              fieldName: 'name',
              fieldNameValue: 'file',
              filePath: 'data/files/dog.jpg'
           },
           headers: getHeadersWithAuthToken(),
           jsonSchema: {
            
           }
        },
        {
           testName: 'Upload pet image with no auth token',
           status: 401,
           urlParameters: {
              petId: '1'
           },
           queryParameters: {
              
           },
           body: {
              
           },
           formData: {
              
           },
           file: {
              fieldName: 'name',
              fieldNameValue: 'file',
              filePath: 'data/files/dog.jpg'
           },
           headers: {"Accept": "application/json"},
           jsonSchema: {
              
           }
        }
    ]
}))()