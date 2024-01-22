const { expect } = require('chai');
const AWS = require('aws-sdk');
const awsServerlessExpress = require('aws-serverless-express');
const supertest = require('supertest');

describe('Serverless Integration Tests', () => {
  let server;

  before(() => {
    // Set up AWS SDK configuration if needed
    AWS.config.update({ region: 'ap-south-1' });

    // Import your Express app
    const app = require('../../src/app');

    // Create an instance of aws-serverless-express
    server = awsServerlessExpress.createServer(app);

    // Optionally, mock AWS services if needed
    // Example: awsSdkMock.mock('DynamoDB', 'query', (params, callback) => callback(null, { Items: [] }));
  });

  after(() => {
    // Clean up AWS service mocks
    // awsSdkMock.restore();
  });

  it('should handle API Gateway request', async () => {
    // Create a supertest request to simulate an API Gateway event
    const response = await supertest(server)
      .get('/')
      .expect(200); // Adjust HTTP status code based on your expected response

    // Perform assertions on the response
    expect(response.body).to.deep.equal({
      // Define the expected response here
    });
  });
});
