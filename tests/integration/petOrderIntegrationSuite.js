import chai from 'chai';
import { addOrder, getPetInventory, deleteOrder } from '../../functions/endpoints/orderEndpoints.js';
import { uploadPetImage, addPet, deletePet } from '../../functions/endpoints/petEndpoints.js';
import { loginUser } from '../../functions/endpoints/usersEndpoints.js';
import { authData } from '../../data/apis/authData.js';
import { placeOrderBody } from '../../data/tests/orderTestData.js';
import { addPetBody } from '../../data/tests/petTestData.js';
import { header } from '../../data/apis/orderAPIData.js';

let headers;
let api_key;
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
    before(async function () {
        let log = await loginUser(authData.username, authData.password, header, 200);
        api_key = log.message.split(":").pop();      
        headers = { ...header, ...{ "api_key": api_key } };
    })

    it("Upload pet image", async function () {
        let headerWithFile = { ...headers, ...{ "Content-Type": "multipart/form-data" } }
        let response = await uploadPetImage("0", headerWithFile, "name", "file", "data/files/dog.jpg", 200);
    })

    testScenarios.forEach(function(data){
        let petIds = [];
        let orderId;
        let inventory;
        let purchased;

        //add pets
        for(let i = 1; i < data[1] + 1; i++) {
            it(`Add pet index ${i}`, async function () {
                let body = addPetBody;
                body.id = body.id + i;
                body.photoUrls = ["./dog.jpg"];    
                let response = await addPet( body, headers, 200);
                petIds.push(response.body.id);
            })
        }
        
        it("Check inventory", async function () {
            //check pet inventory before oreder
            let inventoryBefore = await getPetInventory(headers, 200);
            inventory = inventoryBefore.body["available"];
            purchased = inventoryBefore.body["sold"];            
        })
        
        //order pet
        it("Order pets", async function(){
            //set quantity
            let quantity = data[1] - data[2] > 0 ? data[2] : data[1] - data[2] == 0 ? inventory : inventory + 1;
            //place order
            let body = placeOrderBody;
            body.quantity = quantity;
            body.petId = petIds[0];
            let response =  await addOrder(body, headers, data[3]);
            if(response.statusCode == 200){
                orderId = response.body.id;
            }

            //check pet inventory after order
            let inventoryAfter = await getPetInventory(headers, 200);
            chai.expect(inventoryAfter.body["available"]).to.equal(inventory >= quantity ? inventory - quantity : inventory);
            chai.expect(inventoryAfter.body["sold"]).to.equal(inventory >= quantity ? purchased + quantity : purchased);
        })

        //delete order
        it("Delete order", async function(){
            if(orderId != undefined){
                let response = await deleteOrder(orderId, headers, 200);
            }
        })

        //delete pet
        for(let x = 0; x < data[1]; x++){
            it(`Delete Pet ${x + 1}`, async function () {
                let response = await deletePet(petIds[x], headers, 200);
            })
        }
    })
})