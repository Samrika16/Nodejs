const chai = require('chai');
const { expect } = chai;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const request = require('supertest');
const app = require('../../src/app'); // Adjust the path accordingly
const requester = chai.request(app).keepOpen();

describe('Integration tests for Express.js app', () => {
  it('should return a greeting message', async () => {
    const response = await requester.get("/");
    expect(response.status).to.equal(200);
    //expect(response.body).to.equal('HELLO');
    // console.log(typeof response._body)
    chai.expect(response.res.text).to.equal("HELLO NODEJS WORLD!!!");
  });

  after(function () {
    requester.close();
    console.log('Application closed');
  });
});
