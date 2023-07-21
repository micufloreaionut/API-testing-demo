import request from 'supertest';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
chai.use(chaiJsonSchema);

class TestTemplate {
    constructor(object) {
        this.object = object;
    }

    getCommand(scenario){
        let command = `request.agent('${this.object.url}').${this.object.method}('${this.object.api(scenario.urlParameters)}')`;
        if(Object.keys(scenario.queryParameters).length > 0){
            command += `.query(${JSON.stringify(scenario.queryParameters)})`;
        }
        if(Object.keys(scenario.body).length > 0){
            command += `.send(${JSON.stringify(scenario.body)})`;
        }
        if(Object.keys(scenario.formData).length > 0){
            command += `.type('form').send(${JSON.stringify(scenario.formData)})`;
        }
        if(scenario.file.fieldName.length > 0){
            command += `.set('content-type', 'multipart/form-data').field('${scenario.file.fieldName}', '${scenario.file.fieldNameValue}').attach('${scenario.file.fieldNameValue}', '${scenario.file.filePath}')`;
        }
        if(Object.keys(scenario.headers).length > 0){
            command += `.set(${JSON.stringify(scenario.headers)})`;
        }
        command += `.then(function (res) { return res;}).catch(function (err) {console.error(err.message); return Promise.reject(err);});`
        return(command);
    }

    runScenario(scenario, debug = false) {
        it(`${scenario.testName}`, async ()=> {
            let res = await eval(this.getCommand(scenario));
            if(debug !== false){
                console.dir(eval(debug), { depth: null })
            }
            chai.expect(await res.statusCode).to.equal(scenario.status);
            if (Object.keys(scenario.jsonSchema).length > 0){
                chai.assert.jsonSchema(res.body, scenario.jsonSchema)
            }
        })
    }

    async exportPositiveScenario(scenario = this.object.scenarios[0]) {
        let res = await eval(this.getCommand(scenario));
        return res;
    }
}

export default TestTemplate;