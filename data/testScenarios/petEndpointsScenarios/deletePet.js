import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { deletePetJsonSchema } from '../../jsonSchemas/jsonSchemas.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import addPet from './addNewPet.js'
let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Delete pet endpoint tests',
    functionName: 'deletePet',
    method: 'delete',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}/${urlParameters.petId}`,
    scenarios: [
        {
            testName: 'Delete pet - success',
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
            jsonSchema: deletePetJsonSchema
        },
        {
            testName: 'Delete pet - that was already deleted',
            status: 404,
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
            jsonSchema: {
                
            }
        }
    ]
}))()