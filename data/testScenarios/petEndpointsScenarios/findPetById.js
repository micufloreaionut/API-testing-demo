import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { findPetByIdJsonSchema } from '../../jsonSchemas/jsonSchemas.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import addPet from './addNewPet.js'
let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Find Pet by Id endpoint tests',
    functionName: 'findPetById',
    method: 'get',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}/${urlParameters.petId}`,
    scenarios: [
        {
            testName: 'Find pet by Id - success',
            status: 200,
            urlParameters: {
                petId: await (async ()=>{
                    let testData  = await addPet;
                    let res = await testData.exportPositiveScenario();    
                    return res.body.id;
                })()
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
            jsonSchema: findPetByIdJsonSchema
        },
        {
            testName: 'Find pet by Id - with no pet id',
            status: 405,
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