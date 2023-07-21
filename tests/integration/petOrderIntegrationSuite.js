import chai from 'chai';
import uploadPetImage from '../../data/testScenarios/petEndpointsScenarios/uploadImage.js';
import addPet from '../../data/testScenarios/petEndpointsScenarios/addNewPet.js';
import deletePet from '../../data/testScenarios/petEndpointsScenarios/deletePet.js';
import getPetInventory from '../../data/testScenarios/orderScenarios/getPetInventory.js';
import deleteOrder from '../../data/testScenarios/orderScenarios/deleteOrder.js';
import addOrder from '../../data/testScenarios/orderScenarios/addOrder.js';

let headers;
let testScenarios = [
    //scenario 1: create 3 pets, order 1 pet, check inventory, delete order, delete pets
    ["Scenario 1: order 1 pet", 3, 1, 200],
    //scenario 2: create 3 pets, order 3 pets, check inventory, delete pet, delete order
    ["Scenario 2: order all pets", 3, 3, 200],
    //scenario 3: create 3 pets, order 4 pets, check inventory, delete order, delete pet
    ["Scenario 3: order more than available pets", 3, 4, 400]
];

describe("Test Pet ordering system", function () {
    this.retries(2);

    it("Upload pet image", async function () {
        let testData  = await uploadPetImage;
        let res = await testData.exportPositiveScenario();
        chai.expect(res.statusCode).to.equal(200);
    })

    testScenarios.forEach(function(data){
        let petIds = [];
        let orderId;
        let inventory;
        let purchased;

        //add pets
        for(let i = 1; i < data[1] + 1; i++) {
            it(`Add pet index ${i}`, async function () {
                let testData  = await addPet;
                testData.object.scenarios[0].body.id = testData.object.scenarios[0].body.id + i;
                let res = await testData.exportPositiveScenario();
                petIds.push(res.body.id);
            })
        }
        
        it("Check inventory", async function () {
            //check pet inventory before oreder
            let testData  = await getPetInventory;
            let res = await testData.exportPositiveScenario();
            chai.expect(res.statusCode).to.equal(200);
            inventory = res.body["available"];
            purchased = res.body["sold"];            
        })
        
        //order pet
        it(data[0], async function(){
            //set quantity
            let quantity = data[1] - data[2] > 0 ? data[2] : data[1] - data[2] == 0 ? inventory : inventory + 1;
            //place order
            let testData  = await addOrder;
            testData.object.scenarios[0].body.quantity = quantity;
            testData.object.scenarios[0].body.petId = petIds[0];
            testData.object.scenarios[0].status = data[3];
            let res = await testData.exportPositiveScenario();
            chai.expect(res.statusCode).to.equal(data[3]);
            if(res.statusCode == 200){
                orderId = res.body.id;
            }

            //check pet inventory after order
            let testDataAfter  = await getPetInventory;
            let resAfter = await testDataAfter.exportPositiveScenario();

            chai.expect(resAfter.body["available"]).to.equal(inventory >= quantity ? inventory - quantity : inventory);
            chai.expect(resAfter.body["sold"]).to.equal(inventory >= quantity ? purchased + quantity : purchased);
        })

        //delete order
        it("Delete order", async function(){
            if(orderId != undefined){
                let testData  = await deleteOrder;
                testData.object.scenarios[0].urlParameters.orderId = orderId;
                let res = await testData.exportPositiveScenario();
                chai.expect(res.statusCode).to.equal(200)
            }
        })

        //delete pet
        for(let x = 0; x < data[1]; x++){
            it(`Delete Pet ${x + 1}`, async function () {
                let testData  = await deletePet;
                testData.object.scenarios[0].urlParameters.petId = petIds[x]
                let res = await testData.exportPositiveScenario();
                chai.expect(res.statusCode).to.equal(200);
            })
        }
    })
})