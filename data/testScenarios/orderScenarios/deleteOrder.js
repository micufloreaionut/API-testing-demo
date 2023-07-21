import TestTemplate from '../../../functions/utils.js';
import * as environments from '../../../configs/envs.js';
import { orderEndpoints } from '../../../data/apis/orderAPIData.js';
import { getHeadersWithAuthToken } from '../../../tests/functional/getAuthToken.js';
import addOrder from '../../testScenarios/orderScenarios/addOrder.js';

let env = environments[process.env.ENV];

export default (async ()=>new TestTemplate({
    suiteName: 'Delete order endpoints tests',
    functionName: 'deleteOrder',
    method: 'delete',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${orderEndpoints.order}/${urlParameters.orderId}`,
    scenarios: [
        {
            testName: 'Delete order - success',
            status: 200,
            urlParameters: {
                orderId: await (async ()=>{
                    let testData  = await addOrder;
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