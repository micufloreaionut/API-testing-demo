

//have vaiable a as array, this is where the problem appears


let data = [];
function updateVariable(x) {
    let res;
    res = "Request" + x[1];
    return res;
}

//update variable outside any test case, works
describe("First Suite", function () {
    //data = ["a", "b", "c"];
    it("Print a", function() {
        console.log(data)
    })
    data.forEach((elem) => {
        updateVariable(data.indexOf(elem));
    })
    it("print variable", function () {
        console.log(data)
    })
})

//update variable inside a test case, doesn't work
describe.only("First Suite", function () {
    it("Add data", function () {
        data = [
            ["Title 1", "parameter 1", "statusCode 1"],
            ["Title 2", "parameter 2", "statusCode 2"],
        ]
    })
    it("Update data", function () {
        data.forEach((elem) => {
            elem[1] = updateVariable(elem);
        })
    })
    it("Print data", function () {
        console.log(data)
    })
})

//use different test suites, doesn't work
describe("First Suite", function () {
    it("Print a", function () {
        data = ["a", "b", "c"]
        console.log(data)
    })
})
describe("update data", function () {
    data.forEach((elem) => {
        elem[1] = updateVariable(elem);
    })
})
describe("Updated variable", function () {
    it("print variable", function () {
        console.log(data)
    })
})

//use callback functions, works
describe("First Suite", function () {
    it("Add data", function () {
        data = [
            ["Title 1", "parameter 1", "statusCode 1"],
            ["Title 2", "parameter 2", "statusCode 2"],
        ];
    })
    it("Update data", function () {
        describe("update data", function () {
            data.forEach((elem) => {
                it(elem[0], function () {
                    elem[1] = updateVariable(elem);
                })
            })
        })
    })
    it("Print data", function () {
        describe("Updated variable", function () {
            it("print variable", function () {
                console.log(data)
            })
        })
    })
})



//have vaiable a as array, this is where the problem appears


let a = 0;
function updateVariable() {
    it("Update variable", function () {
        a = 1;
    })
}

//simple, and works
describe("First Suite", function(){
    it("Print a", function() {
        console.log(a)
    })
    it("Update a to 1", function () {
        a = 1;
    })
    it("Print a", function () {
        console.log(a)
    })
})

//includes calling a function, works
describe.only("Second Suite", async function () {
    it("Print a", async function () {
        console.log(a)
    })
    updateVariable();
    it("Print a", async function () {
        console.log(a)
    })
})

//function is inside the suite, works
describe("Third Suite", function () {
    function updateVariableB(x) {
        return x+1;
    }
    it("Print a", function () {
        console.log(a)
    })
    it("Update a to 1", function () {
        a = updateVariableB(a);
    })
    it("Print a", function () {
        console.log(a)
    })
})

//calls a function but async, works
describe("Forth Suite", async function () {
    it("Print a", function () {
        console.log(a)
    })
    it("Update a to 1", async function () {
        a = await updateVariable(a);
    })
    it("Print a", function () {
        console.log(a)
    })
})

//uses done() callback function, works
describe("Fifth Suite", function () {
    it("Print a", function () {
        console.log(a)
    })
    it("Update a to 1", function (done) {
        a = updateVariable(a);
        setTimeout(done, 3000);
    })
    it("Print a", function () {
        console.log(a)
    })
})

//update function outside of test case
//describe("Sixth Suite", function () {
//    it("Print a", function () {
//        console.log(a)
//    })

//    a = 1;
    
//    it("Print a", function () {
//        console.log(a)
//    })
//})

//synchronized tests
describe("Seventh Suite", function () {
    it("Print a", function () {
        console.log(a)
    })
    it("Update a to 1", async function () {
        a = await updateVariable(a);
        describe("Forces tests inside to be prepared and executed after previous level tests were executed", function () {
            it("Print a", function () {
                console.log(a)
            })
        })
    })
})