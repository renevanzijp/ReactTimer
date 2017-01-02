/*
 Testing:
 1) Install packages:
        npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev
 2) Write karma.conf.js
 3) Edit entry in package.json
        "scripts": {
        "test": "karma start",
  4) Add tests in folder tests
 */

var expect = require('expect');


describe("App", () => {
    it("should properly run tests", () =>{
        expect(1).toBe(1);
    });
    it("should properly run more tests", () =>{
        expect(2).toBe(2);
    });
});