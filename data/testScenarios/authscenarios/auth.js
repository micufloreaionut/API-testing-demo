import TestTemplate from '../../../functions/utils.js';
import { authData, header } from '../../apis/authData.js';

export default (async ()=>new TestTemplate({
    suiteName: 'Get auth token',
    functionName: 'getAuthToken',
    method: 'post',  //lowercase method name
    url: `${env.petStore}`,
    api: (urlParameters) => `${authData.login}`,
    scenarios: [
        {
            testName: 'Get auth token - success response',
            status: 200,
            urlParameters: {
                
            },
            queryParameters: {
                username: authData.username,
                password: authData.password
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
            headers: header,
            jsonSchema: {
                
            }
        }
    ]
}))()