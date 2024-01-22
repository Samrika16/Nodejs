const axios = require('axios');
const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');

const ecsServiceUrl = 'http://my-sample-lb-1539113075.ap-south-1.elb.amazonaws.com'; // Replace with your ECS service URL

describe('Integration Test - AWS ECS', () => {
    before(async () => {
        // Perform any setup steps before running tests
        // e.g., deploy your ECS service
    });

    after(async () => {
        // Perform cleanup after tests
        // e.g., undeploy your ECS service
    });

    it('should return "HELLO NODEJS WORLD!!!" from ECS', async () => {
        const response = await axios.get(`${ecsServiceUrl}/`);
        expect(response.status).to.equal(200);
        expect(response.data).to.equal('HELLO NODEJS WORLD!!!');
    });
});
