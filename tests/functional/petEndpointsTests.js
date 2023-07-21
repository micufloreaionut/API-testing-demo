import uploadImage from '../../data/testScenarios/petEndpointsScenarios/uploadImage.js';
import addPet from '../../data/testScenarios/petEndpointsScenarios/addNewPet.js';
import updatePet from '../../data/testScenarios/petEndpointsScenarios/updatePet.js';
import findPetByStatus from '../../data/testScenarios/petEndpointsScenarios/findPetByStatus.js';
import findPetById from '../../data/testScenarios/petEndpointsScenarios/findPetById.js';
import updatePetByFormData from '../../data/testScenarios/petEndpointsScenarios/updatePetByFormData.js';
import deletePet from '../../data/testScenarios/petEndpointsScenarios/deletePet.js';

describe('Await for promises - upload image', function () {
    it('Updating data', async function () {
        let testData  = await uploadImage;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - add pet', function () {
    it('Updating data', async function () {
        let testData  = await addPet;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.slice(0,).forEach( function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - update pet', function () {
    it('Updating data', async function () {
        let testData  = await updatePet;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - find pet by status', function () {
    it('Updating data', async function () {
        let testData  = await findPetByStatus;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - find pet by id', function () {
    it('Updating data', async function () {
        let testData  = await findPetById;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - update pet by form data', function () {
    it('Updating data', async function () {
        let testData  = await updatePetByFormData;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})

describe('Await for promises - delete pet', function () {
    it('Updating data', async function () {
        let testData  = await deletePet;
        describe(`${testData.object.suiteName}`, ()=> {
            testData.object.scenarios.forEach(function (testScenario){
                testData.runScenario(testScenario);
           })
        })
    })
})