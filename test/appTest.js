const hello = require("../app");
const assert = require("chai").assert;


describe('App Script', ()=>{
    it('Hello with No args', ()=>{
        assert.equal(hello(), "Hello");
    });

    it('Hello with args', ()=>{
        assert.equal(hello('Manish'), 'Hello Manish');
    })
})

//npm run test -s. Done for avoiding verbose messages on cmd. Same in package we achieve by doing mocha | true 