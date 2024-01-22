// tests/unit/app.test.js
const { expect } = require("chai");
const { greet } = require("../../lib");

describe("Unit tests for app", () => {
  it("should return a greeting message", () => {
    const message = greet();
    expect(message).to.equal("HELLO NODEJS WORLD!!!");
  });
});
