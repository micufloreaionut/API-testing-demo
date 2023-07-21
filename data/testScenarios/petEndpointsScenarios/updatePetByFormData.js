import TestTemplate from '../../../functions/utils.js';
import { petEndpoints } from '../../apis/petAPIData.js';
import * as environments from '../../../configs/envs.js';
import { updatePetByFormDataJsonSchema } from '../../jsonSchemas/jsonSchemas.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import addPet from './addNewPet.js'
let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Update pet by form data endpoint tests',
    functionName: 'updatePetByFormData',
    method: 'post',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${petEndpoints.pet}/${urlParameters.petId}`,
    scenarios: [
        {
            testName: 'Update pet by form data - success',
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
                name: 'newDoggie'
            },
            file: {
                fieldName: '',
                fieldNameValue: '',
                filePath: ''
            },
            headers: getHeadersWithAuthToken(),
            jsonSchema: updatePetByFormDataJsonSchema
        },
        {
            testName: 'Update pet by form data - with no pet id',
            status: 415,
            urlParameters: {
                petId: ''
            },
            queryParameters: {
                
            },
            body: {
                
            },
            formData: {
                name: 'newDoggie'
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