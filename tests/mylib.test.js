const { expect } = require("chai");
const mylib = require("../mylib");

describe("MyLib Arithmetic Functions", function () {

    before(function () {
        console.log("Starting tests...");
    });

    after(function () {
        console.log("All tests completed.");
    });

    it("should add two numbers", function () {
        expect(mylib.add(10, 5)).to.equal(15);
    });

    it("should subtract two numbers", function () {
        expect(mylib.subtract(10, 5)).to.equal(5);
    });

    it("should multiply two numbers", function () {
        expect(mylib.multiply(10, 5)).to.equal(50);
    });

    it("should divide two numbers", function () {
        expect(mylib.divide(10, 5)).to.equal(2);
    });

    it("should throw an error when dividing by zero", function () {
        expect(() => mylib.divide(10, 0)).to.throw("Cannot divide by zero");
    });

});