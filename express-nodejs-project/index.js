// index.js
const app = require("./src/app");
const awsServerlessExpress = require('aws-serverless-express');

// Wrap the Express app with aws-serverless-express
const server = awsServerlessExpress.createServer(app);

// Export for AWS Lambda
// module.exports.handler = async (event, context) => {
//   const result = await app(event, context);
//   return result;
// };

// Export the handler for AWS Lambda
module.exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
